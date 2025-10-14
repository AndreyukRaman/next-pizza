import { OrderSuccessTemplate } from '@/shared/components/shared/email-templates/order-success';
import { CartItemDTO } from '@/shared/services/dto/cart.dto';
import { render } from '@react-email/render';

export async function renderOrderSuccessTemplate(
  orderId: number | string,
  items: CartItemDTO[],
): Promise<string> {
  return await render(<OrderSuccessTemplate orderId={Number(orderId)} items={items} />);
}
