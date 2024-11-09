import React, { forwardRef, LabelHTMLAttributes } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => {
  return <label className={`labelField ${className}`} ref={ref} {...props} />;
});

Label.displayName = 'Label';

export default Label;
