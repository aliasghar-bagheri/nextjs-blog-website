import localFont from 'next/font/local';

export const interFont = localFont({
  src: [
    {
      path: '../../public/assets/fonts/inter/Inter-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../public/assets/fonts/inter/Inter-Medium.woff2',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../../public/assets/fonts/inter/Inter-SemiBold.woff2',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../../public/assets/fonts/inter/Inter-Bold.woff2',
      style: 'normal',
      weight: '700',
    },
  ],
  style: 'normal',
  variable: '--font-inter',
  display: 'block',
});

export const kumbhSansFont = localFont({
  src: [
    {
      path: '../../public/assets/fonts/kumbh-sans/KumbhSans-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../public/assets/fonts/kumbh-sans/KumbhSans-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
  ],
  style: 'normal',
  variable: '--font-kumbh-sans',
  display: 'block',
});
