import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  leftIcon,
  rightIcon,
  ...props
}) {
  const classNames = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} disabled={disabled} {...props}>
      {leftIcon && <span className="btn__icon btn__icon--left">{leftIcon}</span>}
      <span className="btn__label">{children}</span>
      {rightIcon && <span className="btn__icon btn__icon--right">{rightIcon}</span>}
    </button>
  );
}
