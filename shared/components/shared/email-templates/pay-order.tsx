import React from 'react';

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({ orderId, totalAmount, paymentUrl }) => (
  <div>
    <h1>Заказ #{orderId}</h1>
    <p>
      Pay for the order {totalAmount} P. Go to <a href={paymentUrl}>link</a> for payment.
    </p>
  </div>
);
