import type { ReactNode } from 'react';

export type BadgeColor = 'red' | 'blue' | 'grey' | 'green';

export function Badge({ color = 'grey', children }: { color?: BadgeColor; children: ReactNode }) {
  return <span className={`ds-badge ds-badge--${color}`}>{children}</span>;
}
