import { forwardRef, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return <input className={`textField ${className}`} ref={ref} {...props} />;
});

Input.displayName = 'Input';

export default Input;
