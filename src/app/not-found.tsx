import Button from '@/components/ui/Button';
import { MAIN_PAGE_ROUTES } from '@/constants/routes';
import { logo } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-10 px-6 text-center">
      <h1 className="text-5xl font-medium text-white sm:text-7xl">Oops!</h1>
      <p className="text-lg text-gray-60 sm:text-2xl">
        We couldn`t find the page you were looking for
      </p>
      <Link href={MAIN_PAGE_ROUTES.ROOT}>
        <Button>Go to home</Button>
      </Link>
      <Image
        src={logo.desktop.src}
        width={logo.desktop.width}
        height={logo.desktop.heigth}
        alt="logo"
      />
    </div>
  );
};

export default NotFoundPage;
