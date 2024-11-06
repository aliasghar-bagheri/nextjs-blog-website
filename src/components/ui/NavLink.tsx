import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
  children: ReactNode;
  className?: string;
}

const NavLink = ({ href = '#', isActive, children, className, ...rest }: NavLinkProps) => {
  return (
    <li className="w-full">
      <Link
        href={href}
        className={`inline-block px-[18px] py-[10px] text-sm text-gray-60 ${isActive ? 'rounded border border-border bg-dark-08 font-medium text-white' : 'hover:text-gray-70'} ${className}`}
        {...rest}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
