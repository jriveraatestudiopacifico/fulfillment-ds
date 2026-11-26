# FulfillmentOps Design System

A small, Cloudscape-inspired design system built for the **Foundey Product Designer challenge**: a redesign of Amazon's internal fulfillment dashboard.

- **Figma (source of truth):** https://www.figma.com/design/1azTaa2o7R4R3qIiE0Xwdy/Foundey
- **Designer:** Jorge Rivera · [jorgerivera.design](https://jorgerivera.design)

## Why it exists
Two problems from the brief:
- **Workers:** "I never know what needs my attention first."
- **Managers:** "I cannot see what each worker is doing."

The components encode the answer: every queue item says **why it's urgent and what it blocks**, carries **one specific action**, and the same task data feeds the **manager's team view**, so nobody has to report status by hand.

## Workflow: Figma → tokens → code
1. Tokens live as **Figma variables** (collection `Cloudscape tokens`) and text styles.
2. They're exported with the Figma MCP + Claude into `tokens/tokens.json` (W3C Design Tokens format).
3. `npm run tokens` generates `tokens/tokens.css` (CSS custom properties).
4. React components use only those variables, and mirror the Figma component names and properties.

## What's inside
| Component | Figma | Notes |
|---|---|---|
| `Button` | Button (Primary / Normal / Link) | One primary per view |
| `Badge` | Badge (Red / Blue / Grey / Green) | Counters and labels |
| `StatusIndicator` | Status indicator | Always icon + label, never color alone (WCAG 1.4.1) |
| `QueueItem` | Queue item | Rank, reason, deadline, owner, specific action, overflow (snooze / hand off) |
| `TeamRow` | Team row | Live task, status, load, next cutoff, reassign |

## Run it
```bash
npm install
npm run dev      # demo at localhost:5173
npm run build    # tokens + type check + library build
```

## Notes
Visual language is inspired by AWS Cloudscape (Open Sans, blue primary, rounded containers). Values are approximations, not the official Cloudscape tokens.
