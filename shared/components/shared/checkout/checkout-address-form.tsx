import React from 'react';
import { WhiteBlock } from '@/shared/components/shared/white-block';
import { Input } from '@/shared/components/ui/input';
import { Textarea } from '@/shared/components/ui/textarea';

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Адрес доставки">
      <div className="flex flex-col gap-5">
        <Input name="firstName" className="text-base" placeholder="Введите адрес" />
        <Textarea rows={5} className="text-base" placeholder="Комментарий к заказу" />
      </div>
    </WhiteBlock>
  );
};
