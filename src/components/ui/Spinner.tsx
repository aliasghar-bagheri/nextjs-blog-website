import React, { forwardRef, HTMLAttributes } from 'react';

type SpinnerType = HTMLAttributes<HTMLSpanElement>;

const Spinner = forwardRef<HTMLSpanElement, SpinnerType>(({ className, ...props }, ref) => {
  return <span className={`spinner ${className}`} ref={ref} {...props}></span>;
});

Spinner.displayName = 'Spinner';

export default Spinner;
