import React from 'react';
import { CheckoutItemDetails } from '@/shared/components/shared/checkout-item-details';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { WhiteBlock } from '@/shared/components/shared/white-block';
import { Skeleton } from '@/shared/components/ui/skeleton';

const VAT = 15;
const DELIVERY_PRICE = 250;

interface Props {
  totalAmount: number;
  loading?: boolean;
  className?: string;
}

export const CheckoutSidebar: React.FC<Props> = ({ totalAmount, loading, className }) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE;

  return (
    <WhiteBlock className="p-6 sticky top-4">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        {loading ? (
          <Skeleton className="w-48 h-11" />
        ) : (
          <span className=" h-11 text-[34px] font-extrabold">{totalPrice} P</span>
        )}
      </div>
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package size={20} className="mr-2 text-gray-300" />
            Стоимость корзины:
          </div>
        }
        value={loading ? <Skeleton className="w-16 h-6" /> : `${totalAmount} P`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent size={20} className="mr-2 text-gray-300" />
            Налоги:
          </div>
        }
        value={loading ? <Skeleton className="w-16 h-6" /> : `${vatPrice} P`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck size={20} className="mr-2 text-gray-300" />
            Доставка:
          </div>
        }
        value={loading ? <Skeleton className="w-16 h-6" /> : `${DELIVERY_PRICE} P`}
      />
      <Button
        type="submit"
        // disabled={!totalAmount || submitting}
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Перейти к оплате
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
