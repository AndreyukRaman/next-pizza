'use server';

import { CheckoutFormValues } from '@/shared/components/shared/checkout/checkout-form-schema';
import { prisma } from '@/prisma/prisma-client';
import { OrderStatus, Prisma } from '@prisma/client';
import { cookies } from 'next/headers';
import { sendEmail } from '@/shared/lib/send-email';
import { renderPayOrderTemplate } from '@/shared/lib/render-email';
import { createPayment } from '@/shared/lib/create-payment';
import { getUserSession } from '@/shared/lib/get-user-session';
import { hashSync } from 'bcrypt';

export async function createOrder(data: CheckoutFormValues) {
  try {
    const cookieStore = await cookies();
    const cartToken = cookieStore.get('cartToken')?.value;
    if (!cartToken) {
      throw new Error('Token not found');
    }
    /* looking for Cart using token */
    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    /* if no cart*/
    if (!userCart) {
      throw new Error('Cart not found');
    }
    /* if cart is empty*/
    if (userCart?.totalAmount === 0) {
      throw new Error('Cart is empty');
    }
    /* Creating order */
    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + ' ' + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    });

    /* Updating cart with total amount = 0 */
    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });

    /* Deleting all items from cart */
    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    /* Creating Stripe Checkout Session */
    const session = await createPayment({
      amount: order.totalAmount, // for example 49.99
      orderId: order.id,
      description: `Payment order #${order.id}`,
      currency: 'pln',
    });

    if (!session || !session.url) throw new Error('Payment session not created');

    /* Saving paymentId into order */
    await prisma.order.update({
      where: { id: order.id },
      data: { paymentId: session.id },
    });

    /* Sending mail with payment link */
    const html = await renderPayOrderTemplate(order.id, order.totalAmount, session.url);
    await sendEmail(
      data.email,
      `Next Pizza / Оплатите заказ #${order.id}`,
      html, // now its HTML not JSX
    );

    return session.url;
  } catch (err) {
    console.log('[Create order] Server error', err);
  }
}

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error('Пользователь не найден');
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        fullName: body.fullName,
        email: body.email,
        password: body.password ? hashSync(body.password as string, 10) : findUser?.password,
      },
    });
  } catch (err) {
    console.log('Error [UPDATE_USER]', err);
    throw err;
  }
}
