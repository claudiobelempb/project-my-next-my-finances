import { Background } from 'app/types/backgrounds';
import { Color } from '@/types/Colors';
import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButtonDefaultProps
  extends ButtonHTMLAttributes<HTMLButtonElement | HTMLInputElement | HTMLAnchorElement> {
  id?: string;
  label: string;
  className?: string;
  buttonType?: 'link' | 'button' | 'input' | 'submit' | 'reset';
  sizing?: 'btn-lg' | 'btn-sm';
  isDisabled?: boolean;
  isReadonly?: boolean;
  isActive?: boolean;
  background?: Background;
  color?: Color;
  children?: ReactNode;
  href?: string;
}

const ButtonDefault: React.FC<IButtonDefaultProps> = ({
  id,
  label,
  className,
  buttonType,
  sizing,
  isDisabled,
  background,
  color,
  children,
  href,
  ...props
}) => {
  switch (buttonType) {
    case 'submit':
      return (
        <button className={`btn ${className} ${color} ${background} ${sizing}`} type="submit" onClick={props.onClick}>
          {children} {label ? label : 'Button Default'}
        </button>
      );
    case 'link':
      return (
        <Link href={href ? href : ''}>
          <a className={`btn ${className} ${color} ${background} ${sizing}`} type="button" onClick={props.onClick}>
            {children} {label ? label : 'Button Default'}
          </a>
        </Link>
      );
    case 'submit':
      return (
        <>
          <input
            className={`btn ${className} ${color} ${background} ${sizing}`}
            type="submit"
            value="Submit"
            onChange={props.onChange}
          />
          {children} {label ? label : 'Button Default'}
        </>
      );
    case 'input':
      return (
        <>
          {children}
          <input
            className={`btn ${className} ${color} ${background} ${sizing}`}
            type="reset"
            value="Reset"
            onChange={props.onChange}
          />
        </>
      );
    default:
      return (
        <button
          className={`btn ${className} ${color} ${background} ${sizing}`}
          type="button"
          onClick={props.onClick}
          disabled={isDisabled}
        >
          {children} {label ? label : 'Button Default'}
        </button>
      );
  }
};

export { ButtonDefault };
