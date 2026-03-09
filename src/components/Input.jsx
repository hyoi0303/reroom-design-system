import { forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(function Input(
  {
    label,
    helperText,
    error,
    size = 'md',
    fullWidth = false,
    leftIcon,
    rightIcon,
    className = '',
    id,
    ...props
  },
  ref,
) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const wrapperClass = [
    'input-wrapper',
    fullWidth && 'input-wrapper--full',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const fieldClass = [
    'input-field',
    `input-field--${size}`,
    error && 'input-field--error',
    leftIcon && 'input-field--has-left-icon',
    rightIcon && 'input-field--has-right-icon',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClass}>
      {label && (
        <label className="input-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className="input-container">
        {leftIcon && <span className="input-icon input-icon--left">{leftIcon}</span>}
        <input ref={ref} id={inputId} className={fieldClass} {...props} />
        {rightIcon && <span className="input-icon input-icon--right">{rightIcon}</span>}
      </div>
      {(helperText || error) && (
        <p className={`input-helper ${error ? 'input-helper--error' : ''}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

export default Input;
