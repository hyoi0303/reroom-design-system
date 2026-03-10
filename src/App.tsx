import './App.css'

// ─── Typography Section ────────────────────────────────────────────────────────

const typographyStyles = [
  { label: 'Title Hero', className: 'sds-text-title-hero', meta: 'Inter · 700 · 72px · -3% · 1.2' },
  { label: 'Title Page', className: 'sds-text-title-page', meta: 'Inter · 700 · 48px · -2% · 1.2' },
  { label: 'Subtitle', className: 'sds-text-subtitle', meta: 'Inter · 400 · 32px · 0% · 1.2' },
  { label: 'Heading', className: 'sds-text-heading', meta: 'Inter · 600 · 24px · -2% · 1.2' },
  { label: 'Subheading', className: 'sds-text-subheading', meta: 'Inter · 400 · 20px · 0% · 1.2' },
  { label: 'Body Base', className: 'sds-text-body-base', meta: 'Inter · 400 · 16px · 0% · 1.4' },
  { label: 'Body Strong', className: 'sds-text-body-strong', meta: 'Inter · 600 · 16px · 0% · 1.4' },
  { label: 'Body Small', className: 'sds-text-body-small', meta: 'Inter · 400 · 14px · 0% · 1.5' },
  { label: 'Body Code', className: 'sds-text-body-code', meta: 'Roboto Mono · 400 · 16px · 0% · 1.5' },
]

function TypographySection() {
  return (
    <section className="ds-section">
      <h2 className="ds-section-title">Typography</h2>
      <div className="ds-typography-table">
        <div className="ds-typography-header">
          <span>Style</span>
          <span>Sample</span>
          <span>Spec</span>
        </div>
        {typographyStyles.map(({ label, className, meta }) => (
          <div key={label} className="ds-typography-row">
            <span className="ds-typography-label sds-text-body-small">{label}</span>
            <span className={`ds-typography-sample ${className}`}>Aa</span>
            <span className="ds-typography-meta sds-text-body-small">{meta}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Color Section ─────────────────────────────────────────────────────────────

type SwatchVariant = {
  name: string
  value: string
  onDark?: boolean
}

type ColorGroup = {
  category: string
  variants: SwatchVariant[]
}

const backgroundColors: ColorGroup[] = [
  {
    category: 'Default',
    variants: [
      { name: 'default', value: '#ffffff' },
      { name: 'secondary', value: '#f5f5f5' },
      { name: 'tertiary', value: '#ebebeb' },
      { name: 'hover', value: '#f0f0f0' },
    ],
  },
  {
    category: 'Brand',
    variants: [
      { name: 'default', value: '#2c2c2c', onDark: true },
      { name: 'secondary', value: '#3d3d3d', onDark: true },
      { name: 'tertiary', value: '#525252', onDark: true },
      { name: 'hover', value: '#1a1a1a', onDark: true },
    ],
  },
  {
    category: 'Neutral',
    variants: [
      { name: 'default', value: '#5a5a5a', onDark: true },
      { name: 'secondary', value: '#757575', onDark: true },
      { name: 'tertiary', value: '#919191', onDark: true },
      { name: 'hover', value: '#4a4a4a', onDark: true },
    ],
  },
  {
    category: 'Positive',
    variants: [
      { name: 'default', value: '#14ae5c', onDark: true },
      { name: 'secondary', value: '#d9f5e7' },
      { name: 'tertiary', value: '#f0fbf5' },
      { name: 'hover', value: '#0e9a50', onDark: true },
    ],
  },
  {
    category: 'Warning',
    variants: [
      { name: 'default', value: '#e8b931' },
      { name: 'secondary', value: '#fdf3d0' },
      { name: 'tertiary', value: '#fef9ec' },
      { name: 'hover', value: '#d4a620' },
    ],
  },
  {
    category: 'Danger',
    variants: [
      { name: 'default', value: '#ec221f', onDark: true },
      { name: 'secondary', value: '#fdd9d8' },
      { name: 'tertiary', value: '#fff0f0' },
      { name: 'hover', value: '#d41a17', onDark: true },
    ],
  },
]

const borderColors: ColorGroup[] = [
  {
    category: 'Default',
    variants: [
      { name: 'default', value: '#d9d9d9' },
      { name: 'secondary', value: '#ebebeb' },
      { name: 'tertiary', value: '#f5f5f5' },
    ],
  },
  {
    category: 'Brand',
    variants: [
      { name: 'default', value: '#2c2c2c' },
      { name: 'secondary', value: '#525252' },
      { name: 'tertiary', value: '#757575' },
    ],
  },
  {
    category: 'Neutral',
    variants: [
      { name: 'default', value: '#919191' },
      { name: 'secondary', value: '#b5b5b5' },
      { name: 'tertiary', value: '#d9d9d9' },
    ],
  },
  {
    category: 'Positive',
    variants: [
      { name: 'default', value: '#14ae5c' },
      { name: 'secondary', value: '#5fd99a' },
      { name: 'tertiary', value: '#a8eccc' },
    ],
  },
  {
    category: 'Warning',
    variants: [
      { name: 'default', value: '#e8b931' },
      { name: 'secondary', value: '#f1d27e' },
      { name: 'tertiary', value: '#f7e4b0' },
    ],
  },
  {
    category: 'Danger',
    variants: [
      { name: 'default', value: '#ec221f' },
      { name: 'secondary', value: '#f47978' },
      { name: 'tertiary', value: '#f9bcbc' },
    ],
  },
]

const textColors: ColorGroup[] = [
  {
    category: 'Default',
    variants: [
      { name: 'default', value: '#1e1e1e' },
      { name: 'secondary', value: '#5a5a5a' },
      { name: 'tertiary', value: '#919191' },
      { name: 'on-color', value: '#ffffff' },
    ],
  },
  {
    category: 'Brand',
    variants: [
      { name: 'default', value: '#2c2c2c' },
      { name: 'secondary', value: '#525252' },
      { name: 'on-color', value: '#ffffff' },
    ],
  },
  {
    category: 'Positive',
    variants: [
      { name: 'default', value: '#0a8a49' },
      { name: 'secondary', value: '#14ae5c' },
      { name: 'on-color', value: '#ffffff' },
    ],
  },
  {
    category: 'Warning',
    variants: [
      { name: 'default', value: '#a07c10' },
      { name: 'secondary', value: '#c49a1e' },
      { name: 'on-color', value: '#ffffff' },
    ],
  },
  {
    category: 'Danger',
    variants: [
      { name: 'default', value: '#c01a17' },
      { name: 'secondary', value: '#ec221f' },
      { name: 'on-color', value: '#ffffff' },
    ],
  },
]

const iconColors: ColorGroup[] = [
  {
    category: 'Default',
    variants: [
      { name: 'default', value: '#1e1e1e' },
      { name: 'secondary', value: '#5a5a5a' },
      { name: 'tertiary', value: '#919191' },
      { name: 'on-color', value: '#ffffff' },
    ],
  },
  {
    category: 'Brand',
    variants: [
      { name: 'default', value: '#2c2c2c' },
      { name: 'secondary', value: '#525252' },
      { name: 'on-color', value: '#ffffff' },
    ],
  },
  {
    category: 'Positive',
    variants: [
      { name: 'default', value: '#0a8a49' },
      { name: 'secondary', value: '#14ae5c' },
      { name: 'on-color', value: '#ffffff' },
    ],
  },
  {
    category: 'Warning',
    variants: [
      { name: 'default', value: '#a07c10' },
      { name: 'secondary', value: '#c49a1e' },
      { name: 'on-color', value: '#ffffff' },
    ],
  },
  {
    category: 'Danger',
    variants: [
      { name: 'default', value: '#c01a17' },
      { name: 'secondary', value: '#ec221f' },
      { name: 'on-color', value: '#ffffff' },
    ],
  },
]

function ColorSwatchGrid({
  groups,
  type = 'fill',
}: {
  groups: ColorGroup[]
  type?: 'fill' | 'border' | 'text'
}) {
  return (
    <div className="ds-color-grid">
      {groups.map((group) => (
        <div key={group.category} className="ds-color-row">
          <span className="ds-color-category sds-text-body-small">{group.category}</span>
          <div className="ds-swatches">
            {group.variants.map((v) => (
              <div key={v.name} className="ds-swatch-cell">
                {type === 'fill' && (
                  <div
                    className="ds-swatch"
                    style={{
                      backgroundColor: v.value,
                      border: v.value === '#ffffff' ? '1px solid #d9d9d9' : undefined,
                    }}
                  />
                )}
                {type === 'border' && (
                  <div
                    className="ds-swatch ds-swatch--border"
                    style={{ borderColor: v.value }}
                  />
                )}
                {type === 'text' && (
                  <div
                    className="ds-swatch ds-swatch--text"
                    style={{
                      backgroundColor: v.value === '#ffffff' ? '#1e1e1e' : '#f5f5f5',
                      color: v.value,
                    }}
                  >
                    Aa
                  </div>
                )}
                <span className="ds-swatch-label sds-text-body-small">{v.name}</span>
                <span className="ds-swatch-hex sds-text-body-small">{v.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function ColorSection() {
  return (
    <section className="ds-section">
      <h2 className="ds-section-title">Color</h2>

      <div className="ds-color-subsection">
        <h3 className="ds-subsection-title">Background</h3>
        <ColorSwatchGrid groups={backgroundColors} type="fill" />
      </div>

      <div className="ds-color-subsection">
        <h3 className="ds-subsection-title">Border</h3>
        <ColorSwatchGrid groups={borderColors} type="border" />
      </div>

      <div className="ds-color-subsection">
        <h3 className="ds-subsection-title">Text</h3>
        <ColorSwatchGrid groups={textColors} type="text" />
      </div>

      <div className="ds-color-subsection">
        <h3 className="ds-subsection-title">Icon</h3>
        <ColorSwatchGrid groups={iconColors} type="text" />
      </div>
    </section>
  )
}

// ─── Spacing & Radius Section ──────────────────────────────────────────────────

const spacingTokens = [
  { token: '--sds-size-space-100', value: 4 },
  { token: '--sds-size-space-200', value: 8 },
  { token: '--sds-size-space-300', value: 12 },
  { token: '--sds-size-space-400', value: 16 },
  { token: '--sds-size-space-600', value: 24 },
  { token: '--sds-size-space-800', value: 32 },
  { token: '--sds-size-space-1600', value: 64 },
  { token: '--sds-size-space-2400', value: 96 },
  { token: '--sds-size-space-4000', value: 160 },
]

const radiusTokens = [
  { token: '--sds-size-radius-100', value: 4, label: '4px' },
  { token: '--sds-size-radius-200', value: 8, label: '8px' },
  { token: '--sds-size-radius-400', value: 16, label: '16px' },
  { token: '--sds-size-radius-xl', value: 24, label: '24px' },
  { token: '--sds-size-radius-full', value: 9999, label: 'full' },
]

function SpacingSection() {
  return (
    <section className="ds-section">
      <h2 className="ds-section-title">Spacing & Radius</h2>

      <div className="ds-color-subsection">
        <h3 className="ds-subsection-title">Spacing</h3>
        <div className="ds-spacing-list">
          {spacingTokens.map(({ token, value }) => (
            <div key={token} className="ds-spacing-row">
              <div
                className="ds-spacing-bar"
                style={{ width: Math.min(value * 2, 320) }}
              />
              <span className="ds-spacing-token sds-text-body-small">{token}</span>
              <span className="ds-spacing-value sds-text-body-small">{value}px</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ds-color-subsection">
        <h3 className="ds-subsection-title">Border Radius</h3>
        <div className="ds-radius-list">
          {radiusTokens.map(({ token, value, label }) => (
            <div key={token} className="ds-radius-cell">
              <div
                className="ds-radius-box"
                style={{ borderRadius: Math.min(value, 40) }}
              />
              <span className="ds-radius-token sds-text-body-small">{token.replace('--sds-size-radius-', '')}</span>
              <span className="ds-radius-value sds-text-body-small">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="ds-root">
      <header className="ds-header">
        <h1 className="sds-text-heading">Reroom Design System</h1>
        <p className="sds-text-body-base ds-header-desc">
          Design tokens and foundations — Colors · Typography · Spacing · Radius
        </p>
      </header>
      <main className="ds-main">
        <TypographySection />
        <ColorSection />
        <SpacingSection />
      </main>
    </div>
  )
}
