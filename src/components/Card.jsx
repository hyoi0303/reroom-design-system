import './Card.css';

export default function Card({
  children,
  variant = 'elevated',
  padding = 'md',
  className = '',
  ...props
}) {
  const classNames = [
    'card',
    `card--${variant}`,
    `card--pad-${padding}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}

function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`card__header ${className}`} {...props}>
      {children}
    </div>
  );
}

function CardBody({ children, className = '', ...props }) {
  return (
    <div className={`card__body ${className}`} {...props}>
      {children}
    </div>
  );
}

function CardFooter({ children, className = '', ...props }) {
  return (
    <div className={`card__footer ${className}`} {...props}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
