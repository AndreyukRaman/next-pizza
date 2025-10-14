import React from 'react';
import { CartItemDTO } from '@/shared/services/dto/cart.dto';

interface Props {
  orderId: number | string;
  items: CartItemDTO[];
}

export const OrderSuccessTemplate: React.FC<Props> = ({ orderId, items }) => (
  <div>
    <h1>Thanks for you order!!!</h1>
    <p>Your order #{orderId} has been successfully! Product list:</p>
    <hr />
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.productItem.product.name} | {item.productItem.price} P x {item.quantity} ={' '}
          {item.productItem.price * item.quantity}
        </li>
      ))}
    </ul>
  </div>
);
