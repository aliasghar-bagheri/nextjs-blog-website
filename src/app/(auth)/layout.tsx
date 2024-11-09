import { asideAuthLayoutImage, logo } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full font-inter">
      <aside className="relative hidden min-h-full flex-1 lg:block">
        <Image src={asideAuthLayoutImage} fill alt="aside" className="object-cover brightness-50" />
      </aside>
      <main className="flex min-h-full flex-1 flex-col pb-10">
        <div className="flex h-20 items-center px-6">
          <Link href="/">
            <Image
              src={logo.laptop.src}
              width={logo.laptop.width}
              height={logo.laptop.heigth}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center px-10">{children}</div>
      </main>
    </div>
  );
}

export default AuthLayout;
