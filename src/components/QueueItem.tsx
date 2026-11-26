import { Button } from './Button';
import { StatusIndicator, type StatusType } from './StatusIndicator';

export interface QueueItemProps {
  rank: number;
  title: string;
  /** Why it matters: what it blocks or who is waiting. */
  reason: string;
  urgency: { type: StatusType; label: string };
  owner: string;
  /** A specific verb, e.g. "Resolve payment", never a generic "Review". */
  actionLabel: string;
  onAction?: () => void;
  onMore?: () => void;
}

export function QueueItem({ rank, title, reason, urgency, owner, actionLabel, onAction, onMore }: QueueItemProps) {
  return (
    <li className="ds-queue-item">
      <span className="ds-queue-item__rank" aria-label={`Priority ${rank}`}>{rank}</span>
      <div className="ds-queue-item__content">
        <h3 className="ds-queue-item__title">{title}</h3>
        <p className="ds-queue-item__reason">{reason}</p>
        <div className="ds-queue-item__meta">
          <StatusIndicator type={urgency.type}>{urgency.label}</StatusIndicator>
          <span className="ds-text-muted">Owner: {owner}</span>
        </div>
      </div>
      <div className="ds-queue-item__actions">
        <Button onClick={onAction}>{actionLabel}</Button>
        <button type="button" className="ds-icon-button" aria-label="More actions: snooze, hand off, mark done" onClick={onMore}>
          •••
        </button>
      </div>
    </li>
  );
}
