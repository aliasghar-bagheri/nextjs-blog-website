import { InputHTMLAttributes } from 'react';
import { FieldErrors, UseFormRegister, FieldValues, Path } from 'react-hook-form';
import Input from './Input';
import InputPassword from './InputPassword';

interface RHFTextFieldProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  errors: FieldErrors<T>;
  isRequired?: boolean;
  register: UseFormRegister<T>;
  label: string;
  name: Path<T>;
}

const RHFTextField = <T extends FieldValues>({
  name,
  label,
  type = 'text',
  register,
  errors,
  isRequired,
  className,
  ...rest
}: RHFTextFieldProps<T>) => {
  const hasError = errors[name]?.message;

  return (
    <div className="space-y-3">
      <label htmlFor={name} className="text-lg font-medium text-white">
        {label}
        {isRequired && <span className="text-error ml-2">*</span>}
      </label>
      {type === 'password' ? (
        <InputPassword
          type={type}
          id={name}
          className={`textField ${className}`}
          autoComplete="off"
          {...register(name)}
          {...rest}
        />
      ) : (
        <Input
          type={type}
          id={name}
          className={`textField ${className}`}
          autoComplete="off"
          {...register(name)}
          {...rest}
        />
      )}
      {hasError && <p className="text-error mt-3">{hasError.toString()}</p>}
    </div>
  );
};

export default RHFTextField;
