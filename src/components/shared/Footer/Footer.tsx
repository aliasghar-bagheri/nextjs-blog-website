import Button from '@/components/ui/Button';
import { footerNavLinks, footerResourceLinks, socialLinks } from '@/constants/mainNavLinks';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from '@/components/ui/NavLink';

const Footer = () => {
  return (
    <footer className="bg-dark-8 w-full px-6 pt-14 shadow shadow-dark-40 *:font-inter">
      <div className="container mx-auto space-y-14">
        <div className="grid w-full grid-cols-2 gap-[50px] md:grid-cols-3 xl:grid-cols-5">
          {/* Footer links */}
          {footerNavLinks.map((footerLinks) => {
            return (
              <div key={footerLinks.rootLabel}>
                <h6 className="mb-7 text-[16px] font-medium text-white md:text-lg">
                  {footerLinks.rootLabel}
                </h6>
                <ul className="space-y-3">
                  {footerLinks.subRoot.map((link) => (
                    <NavLink
                      key={link.label}
                      href={link.path}
                      className="flex flex-wrap items-center gap-2 !px-0 text-sm text-dark-40"
                    >
                      {link.label}
                      {link.isNew && (
                        <Button
                          variant="outline"
                          className="bg-gradient-to-r from-dark-15 from-20% via-primary-55/30 via-60% to-primary-55/50 to-30% px-0 py-[1px]"
                        >
                          <span className="rounded bg-dark-15 px-2 py-0.5">New</span>
                        </Button>
                      )}
                    </NavLink>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Footer resource */}
          {footerResourceLinks.map((resourceLink) => {
            return (
              <div key={resourceLink.rootLabel} className="last:col-span-full md:last:col-auto">
                <h6 className="mb-7 text-lg font-medium text-white">{resourceLink.rootLabel}</h6>
                <ul className="flex flex-wrap gap-3 md:block md:space-y-3">
                  {resourceLink.subRoot.map((link) => (
                    <li key={link.label}>
                      <Link href={link.path} target="_blank">
                        <Button variant="outline">
                          {link.label}
                          <Image
                            src="/assets/icons/arrow-up-right.svg"
                            width={18}
                            height={18}
                            alt="arrow up right"
                          />
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-y-5 border-t border-input py-6 text-center md:flex-row md:gap-0">
          <p>
            <Link href="/" className="text-sm text-dark-40">
              Term & Conditions |
            </Link>
            <Link href="/" className="ml-1 text-sm text-dark-40">
              Privacy Policy
            </Link>
          </p>
          <div className="-order-1 flex items-center gap-x-5 md:order-none">
            {socialLinks.map((link) => {
              return (
                <Link key={link.path} href={link.path}>
                  <Image
                    src={link.icon || '/assets/icons/twitter.svg'}
                    width={24}
                    height={24}
                    alt={link.label}
                  />
                </Link>
              );
            })}
          </div>
          <p className="text-sm text-dark-40 lg:text-lg">
            © 2024 FutureTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
