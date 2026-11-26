import { Button } from './Button';
import { StatusIndicator, type StatusType } from './StatusIndicator';

export interface TeamRowProps {
  initials: string;
  name: string;
  role: string;
  /** Comes live from the worker's queue: no extra reporting. */
  task: string;
  status: { type: StatusType; label: string };
  open: number;
  done: number;
  /** 0–1. Over 1 means overloaded. */
  load: number;
  cutoff: string;
  onReassign?: () => void;
}

export function TeamRow({ initials, name, role, task, status, open, done, load, cutoff, onReassign }: TeamRowProps) {
  const idle = open === 0;
  return (
    <div className="ds-team-row" role="row">
      <div className="ds-team-row__person">
        <span className="ds-avatar" aria-hidden="true">{initials}</span>
        <div><div className="ds-team-row__name">{name}</div><div className="ds-team-row__role">{role}</div></div>
      </div>
      <span>{task}</span>
      <StatusIndicator type={status.type}>{status.label}</StatusIndicator>
      <div>
        <div className="ds-load__label">{open} open · {done} done</div>
        <div className="ds-load__track"><div className={`ds-load__fill ${load >= 1 ? 'ds-load__fill--over' : ''}`} style={{ width: `${Math.min(load, 1) * 100}%` }} /></div>
      </div>
      <span className="ds-text-muted">{cutoff}</span>
      <Button variant={idle ? 'primary' : 'normal'} onClick={onReassign}>{idle ? 'Assign' : 'Reassign'}</Button>
    </div>
  );
}
