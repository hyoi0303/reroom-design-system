import { Button } from './components/Button';
import type { ButtonVariant } from './components/Button';

const variants: ButtonVariant[] = ['cta', 'primary', 'secondary', 'tertiary'];

const colorTokens = {
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
};

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 1.5l1.85 3.75L14 5.9l-3 2.93.71 4.12L8 10.94l-3.71 2.01.71-4.12-3-2.93 4.15-.65L8 1.5z" />
  </svg>
);

function Swatch({ name, cssVar }: { name: string; cssVar: string }) {
  const isLight = name.includes('default') && !name.includes('cta') && !name.includes('secondary-border') && !name.includes('text-basic');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 'var(--sds-size-radius-400)',
          backgroundColor: `var(${cssVar})`,
          border: isLight ? '1px solid var(--color-light-alpha-gray50)' : 'none',
        }}
      />
      <span style={{ fontSize: 10, color: '#8d8d91', textAlign: 'center', maxWidth: 80, lineHeight: 1.4 }}>
        {name}
      </span>
    </div>
  );
}

export function App() {
  return (
    <div style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      background: '#1a1a1a',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      padding: '48px 24px',
    }}>
      <div style={{
        background: '#f5f5f5',
        borderRadius: 24,
        padding: 48,
        width: '100%',
        maxWidth: 1200,
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
      }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#19191a' }}>
          reroom Design System
        </h1>

        {/* ── Button Components ──────────────────── */}
        <section style={{ background: '#fff', borderRadius: 16, padding: '40px 32px' }}>
          <h2 style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8d8d91', marginBottom: 32 }}>
            Button Components
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {variants.map((variant) => (
              <div key={variant}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: '#19191a', marginBottom: 16, textTransform: 'capitalize' }}>
                  {variant}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <Button variant={variant} label="Button" />
                    <span style={{ fontSize: 10, color: '#8d8d91' }}>default</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <Button variant={variant} icon label="Button" />
                    <span style={{ fontSize: 10, color: '#8d8d91' }}>icon (default)</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <Button variant={variant} icon={<StarIcon />} label="Button" />
                    <span style={{ fontSize: 10, color: '#8d8d91' }}>icon (custom)</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <Button variant={variant} disabled label="Button" />
                    <span style={{ fontSize: 10, color: '#8d8d91' }}>disabled</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Color Tokens ──────────────────────── */}
        <section style={{ background: '#fff', borderRadius: 16, padding: '40px 32px' }}>
          <h2 style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8d8d91', marginBottom: 32 }}>
            Color Tokens
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {Object.entries(colorTokens).map(([group, tokens]) => (
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
      </div>
    </div>
  );
}
