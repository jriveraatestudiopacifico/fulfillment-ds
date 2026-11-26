import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Badge, Button, QueueItem, StatusIndicator, TeamRow } from '../src';

function Demo() {
  return (
    <main className="ds-root" style={{ maxWidth: 1120, margin: '0 auto', padding: 40, display: 'grid', gap: 32 }}>
      <header>
        <h1 style={{ margin: 0 }}>FulfillmentOps design system</h1>
        <p className="ds-text-muted">Tokens and components from the Foundey challenge Figma file.</p>
      </header>

      <section style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="primary">Resolve payment</Button>
        <Button>Hand off</Button>
        <Button variant="link">Snooze 30 min</Button>
        <Badge color="red">Blocks shipment</Badge>
        <Badge color="grey">4</Badge>
        <StatusIndicator type="error">Truck cutoff 2:00 PM · 1h 45m left</StatusIndicator>
        <StatusIndicator type="warning">Due 4:00 PM</StatusIndicator>
        <StatusIndicator type="success">On track</StatusIndicator>
      </section>

      <section className="ds-container" aria-label="Up next">
        <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <QueueItem rank={2} title="Inventory mismatch in Bin A-14" reason="System shows 6 units, scan found 4. Holding 3 orders for the 2:00 PM truck." urgency={{ type: 'error', label: 'Blocks 3 orders · 2:00 PM cutoff' }} owner="You" actionLabel="Recount bin" />
          <QueueItem rank={3} title="Order #5796 — Rush shipping requested" reason="Customer upgraded to next-day. Carrier must change before the 4:00 PM cutoff." urgency={{ type: 'warning', label: 'Due 4:00 PM · 3h 45m left' }} owner="You" actionLabel="Change carrier" />
        </ol>
      </section>

      <section className="ds-container" role="table" aria-label="Team">
        <TeamRow initials="ML" name="Maria López" role="Pack station 4" task="Order #4127 — Payment mismatch" status={{ type: 'error', label: 'Blocked · 25 min' }} open={5} done={3} load={0.6} cutoff="2:00 PM" />
        <TeamRow initials="AG" name="Ana Gómez" role="Pick zone C" task="Order #5796 — Change carrier" status={{ type: 'warning', label: 'At risk · 2:00 PM truck' }} open={9} done={2} load={1} cutoff="2:00 PM" />
        <TeamRow initials="KP" name="Kevin Park" role="Dock 2" task="No active task" status={{ type: 'pending', label: 'Idle · 18 min' }} open={0} done={7} load={0} cutoff="—" />
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<StrictMode><Demo /></StrictMode>);
