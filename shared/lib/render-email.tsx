import React from 'react';
import { render } from '@react-email/render';
import { PayOrderTemplate } from '@/shared/components/shared/email-templates/pay-order';

/* transforms JSX into HTML string*/
export async function renderPayOrderTemplate(
  orderId: number,
  totalAmount: number,
  paymentUrl: string,
): Promise<string> {
  return await render(
    <PayOrderTemplate orderId={orderId} totalAmount={totalAmount} paymentUrl={paymentUrl} />,
  );
}
