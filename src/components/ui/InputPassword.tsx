import { forwardRef, InputHTMLAttributes, useState } from 'react';
import Image from 'next/image';
import Input from './Input';

type InputPasswordProps = InputHTMLAttributes<HTMLInputElement>;

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ className, disabled, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
      <div className="relative">
        <Input
          disabled={disabled}
          type={showPassword ? 'text' : 'password'}
          className={`textField relative ${className}`}
          ref={ref}
          {...props}
        />

        {!disabled && type === 'password' && (
          <span
            onClick={() => setShowPassword((prevShow) => !prevShow)}
            className="absolute right-2 top-1 cursor-pointer p-2"
          >
            {showPassword ? (
              <Image src="/assets/icons/eye-slash.svg" width={20} height={20} alt="hide password" />
            ) : (
              <Image src="/assets/icons/eye.svg" width={20} height={20} alt="show password" />
            )}
          </span>
        )}
      </div>
    );
  }
);

InputPassword.displayName = 'InputPassword';

export default InputPassword;
