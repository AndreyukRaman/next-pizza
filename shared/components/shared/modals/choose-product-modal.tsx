'use client';

import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/shared/components/ui/dialog';
import { cn } from '@/shared/lib/utils';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '@/shared/components/shared/choose-product-form';
import { ProductWithRelations } from '@/@types/prisma';
import { ChoosePizzaForm } from '@/shared/components/shared/choose-pizza-form';
import { useCartStore } from '@/shared/store/cart';
import toast from 'react-hot-toast';
import { ProductForm } from '@/shared/components/shared/product-form';

interface Props {
  className?: string;
  product: ProductWithRelations;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] !max-w-[1200px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}
      >
        <DialogTitle className="sr-only">Выбор продукта</DialogTitle>
        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};
