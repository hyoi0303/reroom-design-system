import { forwardRef, isValidElement } from 'react';
import type { ButtonProps, ButtonVariant } from './Button.types';

const variantClasses: Record<ButtonVariant, string> = {
  cta: [
    'bg-button-cta-default',
    'hover:bg-button-cta-hover',
    'active:bg-button-cta-pressed',
    'text-text-inverse',
  ].join(' '),
  primary: [
    'bg-button-primary-default',
    'hover:bg-button-primary-hover',
    'active:bg-button-primary-pressed',
    'border',
    'border-button-primary-border',
    'text-text-basic',
  ].join(' '),
  secondary: [
    'bg-button-secondary-default',
    'hover:bg-button-secondary-hover',
    'active:bg-button-secondary-pressed',
    'border',
    'border-button-secondary-border',
    'text-text-basic',
  ].join(' '),
  tertiary: [
    'bg-button-tertiary-default',
    'hover:bg-button-tertiary-hover',
    'active:bg-button-tertiary-pressed',
    'border',
    'border-button-tertiary-border',
    'text-text-basic',
  ].join(' '),
};

const disabledClasses =
  'bg-button-disabled-default text-text-disabled border-transparent cursor-not-allowed';

const baseClasses =
  'rounded inline-flex items-center justify-center gap-2 px-6 py-3 font-medium transition-colors';

const DefaultIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 3L11 8L6 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, icon, disabled = false, variant = 'cta', className, ...rest }, ref) => {
    const classes = [
      baseClasses,
      disabled ? disabledClasses : variantClasses[variant],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const renderIcon = () => {
      if (!icon) return null;
      if (icon === true) return <DefaultIcon />;
      if (isValidElement(icon)) return icon;
      return null;
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={classes}
        {...rest}
      >
        {renderIcon()}
        <span>{label}</span>
      </button>
    );
  },
);

Button.displayName = 'Button';
