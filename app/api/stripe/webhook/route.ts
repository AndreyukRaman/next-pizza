import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from '@/prisma/prisma-client';
import { OrderStatus } from '@prisma/client';
import { sendEmail } from '@/shared/lib/send-email';
import { renderOrderSuccessTemplate } from '@/shared/lib/render-success';

export const runtime = 'nodejs';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

export async function POST(req: Request) {
  const payload = await req.text();
  const sig = req.headers.get('stripe-signature') || '';

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error('❌ Webhook signature verification failed.', err);
    return new NextResponse('Invalid signature', { status: 400 });
  }

  if (event.type === ('checkout.session.completed' as Stripe.Event.Type)) {
    const session = event.data.object as Stripe.Checkout.Session;
    const orderId = session.metadata?.orderId;

    if (!orderId) {
      console.warn('⚠️ Order ID missing in metadata');
      return new NextResponse('Missing order ID', { status: 400 });
    }

    // Получаем заказ из базы
    const order = await prisma.order.findUnique({
      where: { id: Number(orderId) },
    });

    if (!order) {
      console.warn('⚠️ Order not found in DB');
      return new NextResponse('Order not found', { status: 404 });
    }

    // Обновляем статус
    await prisma.order.update({
      where: { id: Number(orderId) },
      data: { status: OrderStatus.SUCCEEDED, paymentId: session.id },
    });

    // Парсим товары (они хранятся в JSON)
    const items = JSON.parse(order.items);

    // Рендерим письмо
    const html = await renderOrderSuccessTemplate(orderId, items);

    // Отправляем пользователю
    await sendEmail(order.email, `Next Pizza / Заказ #${orderId} успешно оплачен`, html);

    console.log(`✅ Email sent for order #${orderId}`);
  }

  return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
}
