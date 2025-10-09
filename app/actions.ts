'use server';

import { CheckoutFormValues } from '@/shared/components/shared/checkout/checkout-form-schema';
import { prisma } from '@/prisma/prisma-client';
import { OrderStatus } from '@prisma/client';
import { cookies } from 'next/headers';
import { sendEmail } from '@/shared/lib/send-email';
import { renderPayOrderTemplate } from '@/shared/lib/render-email';

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

    //   TODO: create URL for payment
    const paymentUrl = 'https://justjoin.it/';

    const html = await renderPayOrderTemplate(order.id, order.totalAmount, paymentUrl);

    await sendEmail(
      data.email,
      `Next Pizza / Оплатите заказ #${order.id}`,
      html, // теперь это строка с HTML
    );

    return paymentUrl;
  } catch (err) {
    console.log('[Create order] Server error', err);
  }
}
