import { ButtonHTMLAttributes, forwardRef } from 'react';

const btnType = {
  primary: 'btn-primary',
  outline: 'btn-outline',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, className, type, ...reset }, ref) => {
    const btnVariant = btnType[variant];
    return (
      <button {...reset} className={`btn ${btnVariant} ${className} `} type={type} ref={ref}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
