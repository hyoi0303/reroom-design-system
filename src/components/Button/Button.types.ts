import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'cta' | 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 텍스트 */
  label: string;
  /** 아이콘: true면 기본 아이콘, ReactNode면 커스텀 아이콘 */
  icon?: ReactNode | boolean;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 버튼 베리언트 (기본: 'cta') */
  variant?: ButtonVariant;
}
