import type { ReactNode } from 'react';

export type StatusType = 'error' | 'warning' | 'success' | 'info' | 'pending';

const icons: Record<StatusType, ReactNode> = {
  error: (<><circle cx="8" cy="8" r="7" fill="#d91515" /><path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></>),
  warning: (<><path d="M8 1.2l7.2 13H.8z" fill="#c48a00" stroke="#c48a00" strokeLinejoin="round" /><path d="M8 6v3.6" stroke="#fff" strokeWidth="2" strokeLinecap="round" /><circle cx="8" cy="12" r="1.1" fill="#fff" /></>),
  success: (<><circle cx="8" cy="8" r="7" fill="#037f0c" /><path d="M4.8 8.2l2.2 2.2 4.2-4.6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></>),
  info: (<><circle cx="8" cy="8" r="7" fill="#0972d3" /><path d="M8 7.2v4" stroke="#fff" strokeWidth="2" strokeLinecap="round" /><circle cx="8" cy="4.8" r="1.1" fill="#fff" /></>),
  pending: (<><circle cx="8" cy="8" r="6.2" fill="none" stroke="#5f6b7a" strokeWidth="1.8" /><path d="M8 4.6V8l2.2 1.6" stroke="#5f6b7a" strokeWidth="1.8" fill="none" strokeLinecap="round" /></>),
};

/** Status is always icon + label, so urgency never relies on color alone (WCAG 1.4.1). */
export function StatusIndicator({ type, children }: { type: StatusType; children: ReactNode }) {
  return (
    <span className={`ds-status ds-status--${type}`}>
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">{icons[type]}</svg>
      <span>{children}</span>
    </span>
  );
}
