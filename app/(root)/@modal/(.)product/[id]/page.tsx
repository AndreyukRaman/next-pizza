import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import { ChooseProductModal } from '@/shared/components/shared/modals/choose-product-modal';

export const runtime = 'nodejs';

export default async function ProductModalPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params; // ⬅️ обязательно await
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
}
