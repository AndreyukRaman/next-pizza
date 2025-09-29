'use client';

import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

import { Product } from '@prisma/client';
import { cn } from '@/lib/utils';
import { Title } from '@/components/shared/title';
import { useRouter } from 'next/navigation';

interface Props {
  className?: string;
  product: Product;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] max- h-[500px] bg-white overflow-hidden',
          className,
        )}
      >
        <Title text={product.name} />
      </DialogContent>
    </Dialog>
  );
};
