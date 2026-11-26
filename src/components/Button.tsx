import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'normal' | 'link';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

/** One primary button per view: the main action. */
export function Button({ variant = 'normal', className = '', ...rest }: ButtonProps) {
  return <button type="button" className={`ds-button ds-button--${variant} ${className}`.trim()} {...rest} />;
}
