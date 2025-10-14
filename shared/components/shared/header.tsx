'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Container } from '@/shared/components/shared/container';
import Image from 'next/image';
import Link from 'next/link';
import { SearchInput } from '@/shared/components/shared/search-input';
import { CartButton } from '@/shared/components/shared/cart-button';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { ProfileButton } from '@/shared/components/shared/profile-button';

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ hasSearch = true, hasCart = true, className }) => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();

  console.log(session, 999);
  React.useEffect(() => {
    if (searchParams.has('paid')) {
      toast.success('Order successfully payed! Details sent to email');
    }
  }, []);
  return (
    <header className={cn('border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <ProfileButton />
          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
