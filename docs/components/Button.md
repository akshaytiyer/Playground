# Button

The Button is the shared call-to-action atom for Playground. It maps 1:1 to the Figma Button component: one React component, configured with props — not separate components per style or size.

> Also available in Storybook at **Components → Button → Docs** (`/docs/components-button--docs`).

**Source:** `src/components/Button/Button.jsx`  
**Storybook:** Components → Button  
**Figma:** Button (Type × Size × State)

---

## When to use

Use Button for actions that submit forms, confirm choices, navigate a primary flow, or trigger a clear side effect.

| Use Button | Prefer something else |
| --- | --- |
| Submit, save, continue, pay | Text links for navigation-only destinations |
| Confirm / cancel in a dialog | Icon-only controls (add an IconButton later if needed) |
| Secondary actions next to a primary CTA | Unstyled clickable text without affordance |

---

## Import

```jsx
import { Button } from '../components/Button/Button';
```

Adjust the relative path for the file you are in. Prefer this import over copying Storybook snippets.

---

## Quick start

```jsx
function CheckoutActions() {
  return (
    <div className="flex gap-3">
      <Button
        variant="Primary"
        size="Medium"
        label="Pay now"
        onClick={handlePay}
      />
      <Button
        variant="Secondary"
        size="Medium"
        label="Cancel"
        onClick={handleCancel}
      />
      <Button
        variant="Tertiary"
        size="Medium"
        label="Learn more"
        onClick={handleLearnMore}
      />
    </div>
  );
}
```

Defaults if you omit props:

- `variant="Primary"`
- `size="Medium"`
- `state="Default"` (interactive hover / focus / press)
- `label="Button"`
- `type="button"`

---

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'Primary' \| 'Secondary' \| 'Tertiary'` | `'Primary'` | Visual hierarchy from Figma **Type** |
| `size` | `'Small' \| 'Medium' \| 'Large'` | `'Medium'` | Scale from Figma **Size** |
| `state` | `'Default' \| 'Hover' \| 'Pressed' \| 'Focused'` | `'Default'` | Forced appearance for docs / Chromatic. Leave `Default` in app code so real CSS `:hover` / `:active` / `:focus-visible` work |
| `label` | `string` | `'Button'` | Visible button text |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Native HTML button type |
| `className` | `string` | `''` | Escape hatch for layout only — do not use to restyle the design system |
| `onClick` | `function` | — | Click handler |
| `...props` | — | — | Passed through to the native `<button>` (e.g. `disabled`, `aria-*`) |

---

## Variants (`variant`)

Variants express **emphasis**, not size.

### Primary

Highest emphasis. Use for the single most important action on a screen or in a group.

```jsx
<Button variant="Primary" label="Save changes" />
```

**Do**

- One primary action per section when possible
- Use for progressive next steps (Continue, Pay, Publish)

**Don’t**

- Place multiple Primary buttons side by side competing for attention
- Use Primary for destructive cancel unless the product explicitly requires it

### Secondary

Medium emphasis. Use for alternative actions next to a Primary button.

```jsx
<Button variant="Secondary" label="Cancel" />
```

**Do**

- Pair with Primary for confirm / cancel patterns
- Use for important but not dominant actions

**Don’t**

- Replace Primary with Secondary when the action is the main task on the page

### Tertiary

Lowest emphasis. Outlined / light surface for quiet actions.

```jsx
<Button variant="Tertiary" label="Learn more" />
```

**Do**

- Use for supporting actions (Learn more, View details)
- Use when the surface already has a Primary and Secondary

**Don’t**

- Use Tertiary for the only action on a page if that action is critical — prefer Primary

---

## Sizes (`size`)

Sizes scale padding and type. They do **not** change meaning — pair any size with any variant.

| Size | Height | Typography | Typical use |
| --- | --- | --- | --- |
| `Small` | 36px | 14px | Compact toolbars, dense tables, inline forms |
| `Medium` | 48px | 16px | Default for most product UI |
| `Large` | 56px | 18px | Marketing CTAs, empty states, high-emphasis footers |

```jsx
<Button variant="Primary" size="Small" label="Edit" />
<Button variant="Primary" size="Medium" label="Continue" />
<Button variant="Primary" size="Large" label="Get started" />
```

**Practice:** keep sizes consistent within the same row or toolbar. Prefer `Medium` unless density or marketing hierarchy requires otherwise.

---

## States (`state`)

In the **app**, leave `state` at `Default` (or omit it). The component handles:

- **Hover** — pointer over
- **Pressed** — active / mouse down
- **Focused** — keyboard focus (`focus-visible`, blue ring `#3d85e0`)

Use a non-default `state` only in Storybook or visual tests when you need a frozen snapshot of Hover / Pressed / Focused.

```jsx
// App code — interactive
<Button variant="Primary" size="Medium" label="Submit" />

// Storybook / Chromatic snapshot only
<Button variant="Primary" size="Medium" state="Focused" label="Submit" />
```

---

## Composition examples

### Primary + Secondary pair

```jsx
<div className="flex gap-3">
  <Button variant="Primary" size="Medium" label="Confirm" type="submit" />
  <Button variant="Secondary" size="Medium" label="Cancel" />
</div>
```

### Full variant row at one size

```jsx
<div className="flex gap-3">
  <Button variant="Primary" size="Large" label="Primary" />
  <Button variant="Secondary" size="Large" label="Secondary" />
  <Button variant="Tertiary" size="Large" label="Tertiary" />
</div>
```

### Disabled

Pass native `disabled` through — do not invent a separate disabled variant unless Figma adds one.

```jsx
<Button variant="Primary" size="Medium" label="Pay now" disabled />
```

---

## Accessibility

- Renders a real `<button>` — prefer that over clickable `div`s
- Keep `label` clear and action-oriented (“Save draft”, not “Click here”)
- Ensure keyboard focus is visible (built-in Focused ring)
- For icon-only buttons later, always provide an accessible name (`aria-label`)
- Use `type="submit"` only when the button submits a form; otherwise keep `type="button"` to avoid accidental submits

---

## Storybook

Stories are organized by **size** so you can review scale first:

- **Small** / **Medium** / **Large** — interactive; change **Variant** and **State** in Controls
- **All Variants** — full Figma matrix (size × variant × state) for visual QA and Chromatic

Open locally:

```bash
npm run storybook
```

Then go to **Components → Button**.

---

## Design–code mapping

| Figma property | React prop | Values |
| --- | --- | --- |
| Type | `variant` | Primary, Secondary, Tertiary |
| Size | `size` | Small, Medium, Large |
| State | `state` | Default, Hover, Pressed, Focused |
| Label text | `label` | string |

One Figma component → one React component. New Figma values should become new prop options, not new files like `PrimaryButtonLarge.jsx`.

---

## Anti-patterns

```jsx
// ❌ Copying Storybook controls output as a one-off styled button
<button className="bg-black h-12 ...">Pay</button>

// ❌ Building separate components per combination
<PrimaryMediumButton />
<SecondarySmallButton />

// ❌ Using className to override brand colors
<Button variant="Primary" className="bg-green-500" label="Pay" />

// ✅ Import shared Button and configure with props
<Button variant="Primary" size="Medium" label="Pay" />
```
