// src/shared/lib/create-payment.ts
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover',
});

interface Props {
  description: string;
  orderId: number;
  amount: number; // в злотых (если PLN) или нужной валюте
  currency?: string; // default 'pln'
}

export async function createPayment({ orderId, amount, description, currency = 'pln' }: Props) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency,
          product_data: {
            name: description,
          },
          unit_amount: Math.round(amount * 100), // Stripe принимает суммы в центах
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: process.env.STRIPE_SUCCESS_URL!,
    cancel_url: process.env.STRIPE_CANCEL_URL!,
    metadata: {
      orderId: orderId.toString(),
    },
  });

  return session;
}
