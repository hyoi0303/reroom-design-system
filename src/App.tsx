import { useState, useCallback } from 'react';
import { Button } from './components/Button';
import type { ButtonVariant } from './components/Button';

const variants: ButtonVariant[] = ['cta', 'primary', 'secondary', 'tertiary'];

const primitiveTokens = [
  { name: 'black', var: '--color-primitive-black' },
  { name: 'white', var: '--color-primitive-white' },
  { name: 'gray-10', var: '--color-primitive-gray-10' },
  { name: 'gray-20', var: '--color-primitive-gray-20' },
  { name: 'gray-90', var: '--color-primitive-gray-90' },
  { name: 'gray-95', var: '--color-primitive-gray-95' },
  { name: 'gray-97', var: '--color-primitive-gray-97' },
  { name: 'red', var: '--color-primitive-red' },
];

const semanticTokenGroups = {
  'Button — CTA': [
    { name: 'cta-default', var: '--color-button-cta-default' },
    { name: 'cta-hover', var: '--color-button-cta-hover' },
    { name: 'cta-pressed', var: '--color-button-cta-pressed' },
  ],
  'Button — Primary': [
    { name: 'primary-default', var: '--color-button-primary-default' },
    { name: 'primary-border', var: '--color-button-primary-border' },
    { name: 'primary-hover', var: '--color-button-primary-hover' },
    { name: 'primary-pressed', var: '--color-button-primary-pressed' },
  ],
  'Button — Secondary': [
    { name: 'secondary-default', var: '--color-button-secondary-default' },
    { name: 'secondary-border', var: '--color-button-secondary-border' },
    { name: 'secondary-hover', var: '--color-button-secondary-hover' },
    { name: 'secondary-pressed', var: '--color-button-secondary-pressed' },
  ],
  'Button — Tertiary': [
    { name: 'tertiary-default', var: '--color-button-tertiary-default' },
    { name: 'tertiary-border', var: '--color-button-tertiary-border' },
    { name: 'tertiary-hover', var: '--color-button-tertiary-hover' },
    { name: 'tertiary-pressed', var: '--color-button-tertiary-pressed' },
  ],
  'Button — Disabled': [
    { name: 'disabled-default', var: '--color-button-disabled-default' },
  ],
  'Text': [
    { name: 'text-basic', var: '--color-text-basic' },
    { name: 'text-subtle', var: '--color-text-subtle' },
    { name: 'text-disabled', var: '--color-text-disabled' },
    { name: 'text-inverse', var: '--color-text-inverse' },
  ],
  'Surface & Background': [
    { name: 'surface-secondary', var: '--color-surface-secondary' },
    { name: 'background-primary', var: '--color-background-primary' },
    { name: 'alpha-gray50', var: '--color-light-alpha-gray50' },
  ],
};

const sections = ['components', 'tokens'] as const;
type Section = (typeof sections)[number];

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 1.5l1.85 3.75L14 5.9l-3 2.93.71 4.12L8 10.94l-3.71 2.01.71-4.12-3-2.93 4.15-.65L8 1.5z" />
  </svg>
);

function Swatch({ name, cssVar }: { name: string; cssVar: string }) {
  const [copied, setCopied] = useState(false);
  const needsBorder =
    name.includes('white') ||
    name.includes('gray-97') ||
    name.includes('gray-95') ||
    (name.includes('default') && !name.includes('cta') && !name.includes('disabled'));

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(`var(${cssVar})`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }, [cssVar]);

  return (
    <div
      onClick={handleCopy}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer',
        position: 'relative',
      }}
      title={`Click to copy: var(${cssVar})`}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 'var(--sds-size-radius-400)',
          backgroundColor: `var(${cssVar})`,
          border: needsBorder ? '1px solid var(--color-light-alpha-gray50)' : 'none',
          transition: 'transform 0.15s',
          ...(copied ? { transform: 'scale(0.92)' } : {}),
        }}
      />
      <span
        style={{
          fontSize: 10,
          color: copied ? '#19191a' : '#8d8d91',
          textAlign: 'center',
          maxWidth: 90,
          lineHeight: 1.4,
          fontWeight: copied ? 600 : 400,
          transition: 'color 0.15s',
        }}
      >
        {copied ? 'Copied!' : name}
      </span>
      <code
        style={{
          fontSize: 9,
          color: '#b0b0b4',
          textAlign: 'center',
          maxWidth: 100,
          lineHeight: 1.3,
          wordBreak: 'break-all',
        }}
      >
        {cssVar}
      </code>
    </div>
  );
}

function ButtonPlayground() {
  const [variant, setVariant] = useState<ButtonVariant>('cta');
  const [icon, setIcon] = useState<'none' | 'default' | 'star'>('none');
  const [disabled, setDisabled] = useState(false);
  const [label, setLabel] = useState('Button');

  const iconProp = icon === 'none' ? undefined : icon === 'default' ? true : <StarIcon />;

  const code = [
    '<Button',
    `  variant="${variant}"`,
    `  label="${label}"`,
    icon !== 'none' ? `  icon={${icon === 'default' ? 'true' : '<StarIcon />'}}` : null,
    disabled ? '  disabled' : null,
    '/>',
  ]
    .filter(Boolean)
    .join('\n');

  return (
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
      {/* Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 220 }}>
        <div>
          <label style={labelStyle}>Variant</label>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {variants.map((v) => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                style={{
                  ...chipStyle,
                  background: v === variant ? '#19191a' : '#eaeaeb',
                  color: v === variant ? '#fff' : '#19191a',
                }}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label style={labelStyle}>Icon</label>
          <div style={{ display: 'flex', gap: 6 }}>
            {(['none', 'default', 'star'] as const).map((i) => (
              <button
                key={i}
                onClick={() => setIcon(i)}
                style={{
                  ...chipStyle,
                  background: i === icon ? '#19191a' : '#eaeaeb',
                  color: i === icon ? '#fff' : '#19191a',
                }}
              >
                {i}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label style={labelStyle}>Label</label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            style={{
              padding: '6px 10px',
              borderRadius: 8,
              border: '1px solid #dbdbdc',
              fontSize: 13,
              width: '100%',
              outline: 'none',
            }}
          />
        </div>
        <div>
          <label style={{ ...labelStyle, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
              style={{ accentColor: '#19191a' }}
            />
            Disabled
          </label>
        </div>
      </div>

      {/* Preview + Code */}
      <div style={{ flex: 1, minWidth: 280, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            background: '#f7f7f8',
            borderRadius: 12,
            padding: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 100,
          }}
        >
          <Button variant={variant} label={label} icon={iconProp} disabled={disabled} />
        </div>
        <pre
          style={{
            background: '#19191a',
            color: '#dbdbdc',
            borderRadius: 12,
            padding: '16px 20px',
            fontSize: 12,
            lineHeight: 1.6,
            overflow: 'auto',
            margin: 0,
          }}
        >
          {code}
        </pre>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: '#69696d',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  marginBottom: 6,
  display: 'block',
};

const chipStyle: React.CSSProperties = {
  padding: '4px 12px',
  borderRadius: 20,
  border: 'none',
  fontSize: 12,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'all 0.15s',
};

export function App() {
  const [activeSection, setActiveSection] = useState<Section>('components');

  return (
    <div
      style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: '#1a1a1a',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        padding: '48px 24px',
      }}
    >
      <div
        style={{
          background: '#f5f5f5',
          borderRadius: 24,
          padding: 48,
          width: '100%',
          maxWidth: 1200,
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: '#19191a', margin: 0 }}>
            reroom Design System
          </h1>
          <div style={{ display: 'flex', gap: 4, background: '#e0e0e2', borderRadius: 12, padding: 3 }}>
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSection(s)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 10,
                  border: 'none',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: s === activeSection ? '#fff' : 'transparent',
                  color: s === activeSection ? '#19191a' : '#8d8d91',
                  transition: 'all 0.2s',
                  textTransform: 'capitalize',
                }}
              >
                {s === 'components' ? 'Components' : 'Color Tokens'}
              </button>
            ))}
          </div>
        </div>

        {activeSection === 'components' && (
          <>
            {/* Interactive Playground */}
            <section style={{ background: '#fff', borderRadius: 16, padding: '40px 32px' }}>
              <h2 style={sectionTitleStyle}>Button Playground</h2>
              <ButtonPlayground />
            </section>

            {/* All Variants Gallery */}
            <section style={{ background: '#fff', borderRadius: 16, padding: '40px 32px' }}>
              <h2 style={sectionTitleStyle}>All Variants</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                {variants.map((variant) => (
                  <div key={variant}>
                    <h3
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#19191a',
                        marginBottom: 16,
                        textTransform: 'capitalize',
                      }}
                    >
                      {variant}
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start' }}>
                      <div style={cellStyle}>
                        <Button variant={variant} label="Button" />
                        <span style={captionStyle}>default</span>
                      </div>
                      <div style={cellStyle}>
                        <Button variant={variant} icon label="Button" />
                        <span style={captionStyle}>icon (default)</span>
                      </div>
                      <div style={cellStyle}>
                        <Button variant={variant} icon={<StarIcon />} label="Button" />
                        <span style={captionStyle}>icon (custom)</span>
                      </div>
                      <div style={cellStyle}>
                        <Button variant={variant} disabled label="Button" />
                        <span style={captionStyle}>disabled</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeSection === 'tokens' && (
          <>
            {/* Primitive Colors */}
            <section style={{ background: '#fff', borderRadius: 16, padding: '40px 32px' }}>
              <h2 style={sectionTitleStyle}>Primitive Colors</h2>
              <p style={{ fontSize: 12, color: '#8d8d91', marginBottom: 20 }}>
                Click a swatch to copy the CSS variable reference.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
                {primitiveTokens.map((t) => (
                  <Swatch key={t.var} name={t.name} cssVar={t.var} />
                ))}
              </div>
            </section>

            {/* Semantic Colors */}
            <section style={{ background: '#fff', borderRadius: 16, padding: '40px 32px' }}>
              <h2 style={sectionTitleStyle}>Semantic Colors</h2>
              <p style={{ fontSize: 12, color: '#8d8d91', marginBottom: 20 }}>
                Click a swatch to copy the CSS variable reference.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {Object.entries(semanticTokenGroups).map(([group, tokens]) => (
                  <div key={group}>
                    <h3 style={{ fontSize: 12, fontWeight: 600, color: '#69696d', marginBottom: 12 }}>
                      {group}
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
                      {tokens.map((t) => (
                        <Swatch key={t.var} name={t.name} cssVar={t.var} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

const sectionTitleStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#8d8d91',
  marginBottom: 32,
};

const cellStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
};

const captionStyle: React.CSSProperties = {
  fontSize: 10,
  color: '#8d8d91',
};
