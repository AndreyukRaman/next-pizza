import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from '@/prisma/prisma-client';
import { OrderStatus } from '@prisma/client';

export const runtime = 'nodejs'; // нужно, чтобы получить raw body reliably

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

export async function POST(req: Request) {
  const payload = await req.text(); // raw body required for signature check
  const sig = req.headers.get('stripe-signature') || '';

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error('Webhook signature verification failed.', err);
    return new NextResponse('Invalid signature', { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const orderId = session.metadata?.orderId;

    // Обновляем статус заказа в БД
    if (orderId) {
      await prisma.order.update({
        where: { id: Number(orderId) },
        data: { status: OrderStatus.SUCCEEDED, paymentId: session.id }, // проверь enum OrderStatus
      });
    }
  }

  return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
}
