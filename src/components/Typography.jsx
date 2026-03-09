import './Typography.css';

const ELEMENT_MAP = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
};

export default function Typography({
  variant = 'body1',
  color,
  weight,
  as,
  className = '',
  children,
  ...props
}) {
  const Tag = as || ELEMENT_MAP[variant] || 'p';

  const classNames = [
    'typography',
    `typography--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style = {
    ...(color && { color: `var(--color-text-${color}, ${color})` }),
    ...(weight && { fontWeight: `var(--font-weight-${weight}, ${weight})` }),
  };

  return (
    <Tag
      className={classNames}
      style={Object.keys(style).length ? style : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
