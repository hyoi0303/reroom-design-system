/**
 * reroom Design System — Theme Tokens
 *
 * CSS variable references for use in tailwind.config.js.
 * Actual hex values are defined in tokens/colors.css.
 * Structure mirrors Figma variable hierarchy (color/button/cta-default → button.cta.default).
 */

const colors = {
  button: {
    cta: {
      default: 'var(--color-button-cta-default)',
      hover: 'var(--color-button-cta-hover)',
      pressed: 'var(--color-button-cta-pressed)',
    },
    primary: {
      default: 'var(--color-button-primary-default)',
      border: 'var(--color-button-primary-border)',
      hover: 'var(--color-button-primary-hover)',
      pressed: 'var(--color-button-primary-pressed)',
    },
    secondary: {
      default: 'var(--color-button-secondary-default)',
      border: 'var(--color-button-secondary-border)',
      hover: 'var(--color-button-secondary-hover)',
      pressed: 'var(--color-button-secondary-pressed)',
    },
    tertiary: {
      default: 'var(--color-button-tertiary-default)',
      border: 'var(--color-button-tertiary-border)',
      hover: 'var(--color-button-tertiary-hover)',
      pressed: 'var(--color-button-tertiary-pressed)',
    },
    disabled: {
      default: 'var(--color-button-disabled-default)',
    },
  },
  text: {
    basic: 'var(--color-text-basic)',
    subtle: 'var(--color-text-subtle)',
    disabled: 'var(--color-text-disabled)',
    inverse: 'var(--color-text-inverse)',
  },
  surface: {
    secondary: 'var(--color-surface-secondary)',
  },
  background: {
    primary: 'var(--color-background-primary)',
  },
  light: {
    alpha: {
      gray50: 'var(--color-light-alpha-gray50)',
    },
  },
};

module.exports = { colors };
