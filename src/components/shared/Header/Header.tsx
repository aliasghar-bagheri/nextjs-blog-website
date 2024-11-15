'use client';

import { mainNavLinks } from '@/constants/mainNavLinks';
import { UserRole, T_NavLink } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import NavLink from '@/components/ui/NavLink';
import Drawer from '@/components/ui/Drawer';
import { useAuth } from '@/context/auth/AuthProvider';
import { AUTH_PAGE_ROUTES, MAIN_PAGE_ROUTES } from '@/constants/routes';

const Header = () => {
  const pathname = usePathname();
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const {
    state: { isLoading, user },
  } = useAuth();

  const isAdmin = user?.role === UserRole.ADMIN;
  const dashboardPath = user
    ? isAdmin
      ? MAIN_PAGE_ROUTES.DASHBOARD
      : MAIN_PAGE_ROUTES.ACCOUNT
    : AUTH_PAGE_ROUTES.SIGN_IN;

  return (
    <header
      className={`sticky left-0 top-0 z-20 bg-dark-10/70 px-4 py-5 shadow shadow-dark-15 backdrop-blur *:font-inter`}
    >
      {/* Desktop menu */}
      <div className="mx-auto hidden w-full items-center justify-between lg:container md:flex">
        {/* Logo */}
        <Link href={MAIN_PAGE_ROUTES.ROOT}>
          <Image src="/assets/images/logo-laptop.svg" width={144} height={40} alt="logo" />
        </Link>
        {/* Menu links */}
        <nav>
          <ul className="flex items-center">
            {mainNavLinks.map((link: T_NavLink) => {
              const isActive = pathname === link.path;
              return (
                <NavLink key={link.path} href={link.path} isActive={isActive}>
                  {link.label}
                </NavLink>
              );
            })}
          </ul>
        </nav>

        {/* Auth and contact */}
        <div className={`flex items-center gap-x-5 transition-all ${isLoading ? 'blur-md' : ''}`}>
          <Link href={dashboardPath}>
            <Button variant="outline">{user && user.$id ? 'Dashboard' : 'Sign in'}</Button>
          </Link>
          <Link href={MAIN_PAGE_ROUTES.CONTACT_US}>
            <Button>Contact Us</Button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="flex w-full items-center justify-between md:hidden">
        <Link href={MAIN_PAGE_ROUTES.ROOT}>
          <Image src="/assets/images/logo-mobile.svg" width={125} height={35} alt="logo" />
        </Link>
        <Button onClick={() => setShowDrawer(true)} variant="outline">
          <Image src="/assets/icons/menubar.svg" width={24} height={24} alt="menu" />
        </Button>

        {showDrawer && (
          <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
            <div className="flex items-center justify-between">
              <Link href={MAIN_PAGE_ROUTES.ROOT}>
                <Image src="/assets/images/logo-mobile.svg" width={125} height={35} alt="logo" />
              </Link>
              <Button onClick={() => setShowDrawer(false)} variant="outline">
                <Image src="/assets/icons/x-mark.svg" width={24} height={24} alt="close" />
              </Button>
            </div>

            <nav className="h-full py-10">
              <ul className="flex flex-col items-center gap-y-10">
                {mainNavLinks.map((link: T_NavLink) => {
                  const isActive = pathname === link.path;
                  return (
                    <NavLink
                      key={link.path}
                      href={link.path}
                      isActive={isActive}
                      className="w-full text-center"
                    >
                      {link.label}
                    </NavLink>
                  );
                })}
              </ul>
            </nav>
            <div className={`transition-all ${isLoading ? 'blur-md' : ''}`}>
              <Link href={dashboardPath}>
                <Button variant="outline" className="mb-5 w-full">
                  {user && user.$id ? 'Dashboard' : 'Sign in'}
                </Button>
              </Link>
              <Link href={MAIN_PAGE_ROUTES.CONTACT_US}>
                <Button className="w-full">Contact Us</Button>
              </Link>
            </div>
          </Drawer>
        )}
      </div>
    </header>
  );
};

export default Header;
