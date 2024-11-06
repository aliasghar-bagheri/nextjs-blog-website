'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface DrawerProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const Drawer = ({ children, open, onClose }: DrawerProps) => {
  return createPortal(
    <>
      {/* Drawer backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 left-0 top-0 z-30 min-h-screen w-full bg-dark-10/70 backdrop-blur ${open ? 'block' : 'pointer-events-none hidden'} `}
      ></div>
      {/* Drawer sidebar */}
      <div
        className={`fixed right-0 top-0 z-30 h-full w-full max-w-[280px] transform bg-dark-08 transition-transform ${open ? 'translate-x-0' : 'translate-x-full'} `}
      >
        <div className="flex h-full flex-col justify-between overflow-y-auto px-4 py-5">
          {children}
        </div>
      </div>
    </>,
    document.body
  );
};

export default Drawer;
