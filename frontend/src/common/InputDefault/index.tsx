import { ChangeEvent, FormEvent, FormHTMLAttributes, ReactNode, useState } from 'react';
import { InputHTMLAttributes } from 'react';
import { InputOption } from '@/types/Options';
import { Border, BorderColor, BorderRadius, BorderSizes, BorderWidth } from '@/types/Border';
import { toast } from 'react-toastify';

export interface InputDefaultProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
  id: string;
  label?: string;
  className?: string;
  inputType?: 'textarea' | 'select';
  sizing?: 'form-control-lg' | 'form-control-sm';
  options?: InputOption[];
  isDisabled?: boolean;
  isReadonly?: boolean;
  isActive?: boolean;
  isBorder?: Border | BorderWidth | BorderSizes | BorderRadius | BorderColor;
  children?: ReactNode;
  formatter?: (value: string) => string;
  isInValid?: string;
  isValid?: number;
  isMessageError?: string;
}

const InputDefault: React.FC<InputDefaultProps> = ({
  id,
  label,
  className,
  inputType,
  options,
  sizing,
  isDisabled,
  isReadonly,
  isActive,
  isBorder,
  children,
  formatter,
  isInValid,
  isValid,
  isMessageError,

  ...props
}) => {
  switch (inputType) {
    case 'textarea':
      return (
        <div className={`${className}`}>
          <label htmlFor={id} className="form-label">
            {label}
          </label>
          <textarea
            id={id}
            className={`form-control ${sizing} ${isBorder}`}
            placeholder={props.placeholder}
            aria-label={id}
            value={props.value}
            onChange={props.onChange}
            disabled={isDisabled}
            readOnly={isReadonly}
          ></textarea>
        </div>
      );
    case 'select':
      return (
        <div className={`${className}`}>
          <label htmlFor={id} className="form-label">
            {label}
          </label>
          <select
            className={`form-select ${sizing}`}
            aria-label="Default select example"
            value={props.value}
            onChange={props.onChange}
            disabled={isDisabled}
          >
            <option selected>{props.placeholder}</option>
            {options?.map((option) => {
              return <option value={option.value}>{option.label}</option>;
            })}
          </select>
        </div>
      );
    default:
      return (
        <div className={`${className}`}>
          <label htmlFor={id} className="form-label">
            {label}
          </label>
          <input
            {...props}
            id={id}
            className={`form-control ${isValid ? isValid : 'is-valid'} ${
              !isInValid ? isInValid : 'is-invalid'
            } ${sizing} ${isBorder}`}
            aria-label={id}
            disabled={isDisabled}
            readOnly={isReadonly}
            value={props.value}
            onChange={props.onChange}
          />
          {children}
          {isInValid && <div className={isInValid ? 'invalid-feedback' : 'valid-feedback'}>{isMessageError}</div>}
        </div>
      );
  }
};

InputDefault.defaultProps = {
  options: [
    { label: 'Options 01', value: '1' },
    { label: 'Options 02', value: '2' },
    { label: 'Options 03', value: '3' },
  ],
};

export { InputDefault };
