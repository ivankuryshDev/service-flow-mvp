# CLAUDE.md

## Project: ServiceFlow

ServiceFlow is a frontend-only portfolio MVP for a local service booking and availability platform.

The goal is to build a polished, commercial-quality demo that demonstrates real-world frontend engineering skills: routing, reusable components, forms, validation, state management, filtering, booking flow, business dashboard, localStorage persistence, responsive UI, accessibility, and testing.

This is not a production startup and must not include a real backend, database, authentication, payments, SMS, email, or calendar integrations.

---

## 1. Product Summary

ServiceFlow helps customers search for local services and book available time slots.

Example services:

- Laptop repair
- Phone repair
- Dental check-up
- Cleaning
- Consultation
- Beauty/service appointment

There are two user roles:

1. Customer
   - Searches for a service
   - Compares providers
   - Selects an available time slot
   - Enters contact details
   - Creates a booking
   - Sees a confirmation page

2. Business owner
   - Views dashboard stats
   - Manages bookings
   - Confirms, cancels, and completes bookings
   - Manages availability slots

---

## 2. Commercial-Quality Expectations

Build this project as if it were a real commercial frontend MVP.

Prioritise:

- Clean architecture
- Maintainable folder structure
- Reusable components
- Strong TypeScript typing
- Predictable state management
- Accessible UI
- Responsive layouts
- Clear loading, empty, error, and disabled states
- Consistent design system
- Simple but realistic mock data
- Tests for key business logic and user flows
- Production-ready README
- Deployability to Vercel

Avoid:

- Quick hacks
- Duplicated UI patterns
- Unclear component responsibilities
- Overly large components
- Unused libraries
- Fake buttons that do nothing
- Generic grey SaaS/admin dashboard look
- Over-engineering beyond the MVP scope

---

## 3. Claude Code Workflow and Token-Saving Rules

Claude Code tokens are limited. Always work cautiously and incrementally.

Mandatory workflow:

1. Read `CLAUDE.md` first.
2. Use plan mode before editing files.
3. Do not edit files until the plan is reviewed and approved.
4. Implement only one small approved step at a time.
5. Do not build the full app in one prompt.
6. Do not modify unrelated files.
7. After implementation, summarize changed files and why they changed.
8. Run available checks after each step, such as typecheck, lint, or tests.
9. Stop after the approved scope is complete.

When unsure, ask for approval before making broader changes.

Preferred prompt pattern:

```txt
Read CLAUDE.md first.
Enter plan mode.
Create a small implementation plan for this exact task only.
Do not edit files yet.
```

Then, only after approval:

```txt
Implement only the approved step.
Do not expand the scope.
After changes, summarize changed files and run available checks.
```

---


## 4. Tech Stack

Use:

- Next.js with App Router
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- React state and/or Zustand
- Mock data
- localStorage persistence
- Vitest
- React Testing Library
- Playwright
- Vercel deployment

Do not use in this MVP:

- Real backend
- Real authentication
- Database
- JWT / refresh tokens
- Payments
- Email/SMS integrations
- Calendar integration
- Real maps
- Complex analytics
- Redux Toolkit unless there is a strong reason

Package manager preference:

- Use `pnpm` if setting up from scratch.

---

## 5. Design Direction

The design should be created from scratch in Claude Code, but it must feel like a modern commercial booking product.

Visual direction:

- Bright, warm, optimistic booking-product style
- Inspired by modern airline-style booking flows, but not copied from any brand
- Warm yellow primary accent
- Dark charcoal typography
- Warm off-white background
- Large rounded booking panels
- Soft shadows
- Generous spacing
- Large touch-friendly inputs
- Clear CTA buttons
- Friendly but professional tone
- Modern customer-facing product feel

Avoid:

- Generic grey dashboard look
- Cold enterprise SaaS feel
- Overuse of grey backgrounds
- Small cramped form controls
- Too many borders
- Visually flat UI
- Random colours without a system

Recommended design tokens:

```txt
Colours:
- background: warm off-white
- surface: white / warm white
- primary: warm yellow
- primaryDark: amber / golden brown
- text: dark charcoal
- mutedText: warm neutral grey
- border: soft warm neutral
- success: green
- warning: amber
- danger: red

Radius:
- sm
- md
- lg
- xl
- 2xl

Shadow:
- soft card shadow
- larger hero/search panel shadow

Spacing:
- generous spacing, especially in cards and forms

Typography:
- clear hierarchy
- strong page titles
- readable body text
- large CTA labels
```

All UI should look consistent across customer and business routes.

---

## 6. Application Routes

Customer routes:

```txt
/
```

Home / Search page.

```txt
/results
```

Search Results page.

```txt
/services/[id]
```

Service Details & Booking page.

```txt
/booking/confirmation
```

Booking Confirmation page.

Business routes:

```txt
/business
```

Business Dashboard Overview.

```txt
/business/bookings
```

Bookings Management page.

```txt
/business/availability
```

Availability Management page.

Optional route:

```txt
/demo
```

Role selection page. This can be added later if useful.

---

## 7. Recommended Project Structure

Use a clean App Router structure:

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css

    results/
      page.tsx

    services/
      [id]/
        page.tsx

    booking/
      confirmation/
        page.tsx

    business/
      layout.tsx
      page.tsx
      bookings/
        page.tsx
      availability/
        page.tsx

  components/
    ui/
      Button.tsx
      Input.tsx
      Select.tsx
      Textarea.tsx
      Card.tsx
      Badge.tsx
      Modal.tsx
      Drawer.tsx
      EmptyState.tsx
      Skeleton.tsx
      Toast.tsx

    layout/
      Header.tsx
      BusinessSidebar.tsx
      PageShell.tsx
      Container.tsx

    customer/
      SearchPanel.tsx
      PopularCategories.tsx
      BenefitsSection.tsx
      ServiceCard.tsx
      FilterBar.tsx
      TimeSlotButton.tsx
      BookingSummary.tsx
      BookingForm.tsx

    business/
      StatCard.tsx
      BookingTable.tsx
      BookingDetailPanel.tsx
      StatusBadge.tsx
      AvailabilityWeekView.tsx
      TimeSlotEditor.tsx

  data/
    mockServices.ts
    mockProviders.ts
    mockAvailability.ts
    mockBookings.ts

  lib/
    storage.ts
    bookingUtils.ts
    filters.ts
    dates.ts
    formatters.ts
    cn.ts

  stores/
    useBookingStore.ts

  types/
    service.ts
    provider.ts
    booking.ts
    availability.ts

  test/
    setup.ts

  e2e/
    customer-booking.spec.ts
    business-booking.spec.ts
```

---

## 8. TypeScript Models

Use strong TypeScript types.

```ts
export type ServiceCategory =
  | 'Laptop repair'
  | 'Phone repair'
  | 'Dental'
  | 'Cleaning'
  | 'Consultation'
  | 'Beauty';

export type BookingStatus = 'new' | 'confirmed' | 'completed' | 'cancelled';

export type SlotStatus = 'available' | 'booked' | 'blocked' | 'unavailable';

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  durationMinutes: number;
  priceFrom: number;
  includes: string[];
}

export interface Provider {
  id: string;
  name: string;
  serviceIds: string[];
  rating: number;
  reviewsCount: number;
  location: string;
  address: string;
  shortDescription: string;
}

export interface AvailabilitySlot {
  id: string;
  providerId: string;
  serviceId: string;
  date: string;
  startTime: string;
  endTime: string;
  status: SlotStatus;
}

export interface Booking {
  id: string;
  reference: string;
  serviceId: string;
  providerId: string;
  slotId: string;
  customerName: string;
  contact: string;
  note?: string;
  status: BookingStatus;
  price: number;
  createdAt: string;
}
```

Keep business logic type-safe. Avoid `any`.

---

## 9. State Management

Start simple, but keep the structure scalable.

Use:

- Mock data as initial data
- localStorage for persistence
- Zustand only if shared state becomes easier to manage with a store

Persist:

```txt
serviceflow.bookings
serviceflow.availability
serviceflow.lastBooking
```

State responsibilities:

Bookings:

- Load initial mock bookings
- Create booking
- Generate reference
- Save latest booking
- Update booking status
- Persist updates in localStorage
- Calculate dashboard stats

Availability:

- Load initial mock slots
- Add slot
- Remove slot
- Block slot
- Mark selected slot as booked
- Persist slot updates in localStorage
- Make new available slots visible on the customer booking page

Important:

- All localStorage access must be client-safe.
- Avoid hydration errors.
- Use helper functions for storage reads/writes.
- Do not access `window` directly during server rendering.

---

## 10. UI Component Standards

Base UI components should be reusable and consistent.

Each UI component should:

- Use TypeScript props
- Support `className`
- Be accessible by default
- Use semantic HTML
- Have consistent focus states
- Avoid unnecessary dependencies
- Avoid hidden business logic
- Be small and composable

Create a `cn()` helper for conditional class names.

Recommended base components:

- Button
- Input
- Select
- Textarea
- Card
- Badge
- Modal
- Drawer
- EmptyState
- Skeleton

Button variants:

- primary
- secondary
- outline
- ghost
- danger

Button states:

- default
- hover
- focus
- disabled
- loading where useful

Badge variants:

- new
- confirmed
- completed
- cancelled
- available
- booked
- blocked
- unavailable

---

## 11. Customer Features

### Home / Search Page

Route:

```txt
/
```

Build:

- Header/navigation
- Hero section
- Large booking/search panel
- Service category selector
- Location input
- Date selector
- Primary CTA: “Find services”
- Popular service categories
- Trust/benefits section

Behaviour:

- User selects category
- User enters/selects location
- User selects date
- Click “Find services”
- Navigate to `/results`
- Store selected filters in query params

Example:

```txt
/results?category=Laptop%20repair&location=Dublin&date=2026-06-27
```

---

### Search Results Page

Route:

```txt
/results
```

Build:

- Search summary bar
- Filters
- Provider cards
- Recommended/highlighted provider card
- Empty state

Provider card should show:

- Service name
- Provider name
- Rating
- Price
- Location
- Next available time
- CTA: “View availability”

Behaviour:

- Read filters from query params
- Filter mock data
- Search by category/location/service/provider
- Show empty state if no results match
- Click “View availability” routes to `/services/[id]`

---

### Service Details & Booking Page

Route:

```txt
/services/[id]
```

Build:

- Service/provider header
- Provider name
- Category
- Rating/reviews count
- Location
- Short description
- Price from
- What is included
- Duration
- Cancellation note
- Trust/safety note
- Date selector
- Time slot buttons/cards
- Customer details form
- Booking summary card
- CTA: “Confirm booking”

Time slot states:

- available
- selected
- unavailable
- booked/loading if needed

Form fields:

- name
- email or phone
- optional note/message

Use:

- React Hook Form
- Zod validation

Behaviour:

- User selects available time slot
- Selected slot updates booking summary
- Unavailable/booked slots cannot be selected
- Submit validates form
- Create booking
- Mark selected slot as booked
- Save booking to localStorage
- Save latest booking
- Route to `/booking/confirmation`

---

### Booking Confirmation Page

Route:

```txt
/booking/confirmation
```

Build:

- Success hero
- Booking reference number
- Booking details card
- What happens next section
- “Find another service” action
- Disabled or “Coming soon” Add to calendar action

Behaviour:

- Show booking details from latest submitted booking
- If latest booking is missing, show graceful empty state
- “Find another service” routes to `/`

---

## 12. Business Features

### Business Dashboard

Route:

```txt
/business
```

Build:

- Business name, for example “Dublin Laptop Care”
- Greeting
- Current date
- Primary action: “Add availability”
- Quick stats cards
- Today’s bookings
- Upcoming bookings
- Recent activity
- Availability reminder card

Stats:

- New bookings
- Confirmed today
- Completed this week
- Cancelled
- Estimated revenue/bookings value

Behaviour:

- Stats are calculated from current bookings
- Today’s bookings use localStorage state
- “Add availability” routes to `/business/availability`
- Booking detail links route to `/business/bookings`

---

### Bookings Management

Route:

```txt
/business/bookings
```

Build:

- Page header
- Search input
- Status filter
- Service type filter
- Date filter
- Clear filters action
- Bookings list/table
- Booking detail side panel

Booking list columns:

- Booking reference
- Customer name
- Service
- Date/time
- Contact method
- Price
- Status badge
- Actions

Statuses:

- New
- Confirmed
- Completed
- Cancelled

Actions:

- View
- Confirm
- Cancel
- Mark completed

Behaviour:

- Search filters by customer name/service/reference
- Status filter works
- Date filter works: Today / This week / All
- View opens side panel
- Confirm changes `new` to `confirmed`
- Cancel changes status to `cancelled`
- Mark completed changes status to `completed`
- Changes persist in localStorage
- Dashboard stats update after status changes

Rule:

Do not leave active buttons without behaviour. If a feature is not implemented, make the button disabled or label it “Coming soon”.

---

### Availability Management

Route:

```txt
/business/availability
```

Build:

- Page header
- Current week selector
- Primary action: “Add time slot”
- Weekly availability view
- Add/edit slot panel or modal
- Availability rules card
- Quick actions

Slot states:

- Available
- Booked
- Blocked
- Unavailable

Behaviour:

- Show weekly availability from mock/localStorage data
- Add time slot
- Remove time slot
- Block day or block slot
- Booked slots are visually different
- New available slots appear in Service Details & Booking page

Postpone:

- Recurring slots
- Copy availability from previous week
- Complex overlap validation
- Calendar sync

---

## 13. Forms and Validation

Use React Hook Form + Zod.

Booking form validation:

- Name is required
- Contact is required
- Contact should be either a valid email or a reasonable phone number
- Time slot must be selected before submit
- Note is optional

Validation UX:

- Show field-level error messages
- Use accessible `aria-invalid`
- Keep labels visible
- Avoid placeholder-only inputs
- Disable submit while submitting
- Do not clear form unexpectedly

---

## 14. Utility Functions

Create helpers in `src/lib`.

### `storage.ts`

Responsible for:

- Safe localStorage reads
- Safe localStorage writes
- JSON parse fallback
- SSR-safe guards
- Optional reset demo data helper

### `bookingUtils.ts`

Responsible for:

- Generate booking ID
- Generate booking reference, e.g. `SF-2048`
- Create booking object
- Update booking status
- Calculate dashboard stats
- Get booking display data

### `filters.ts`

Responsible for:

- Filter providers
- Filter bookings
- Search by text
- Filter by status/date/category

### `dates.ts`

Responsible for:

- Format date
- Check if date is today
- Check if date is this week
- Build week view
- Sort slots by time

### `formatters.ts`

Responsible for:

- Format price
- Format duration
- Format status labels
- Format date/time for UI

---

## 15. Testing Strategy

Use Vitest + React Testing Library for unit/component tests.

Test:

- Booking form validation
- Time slot selection
- Disabled unavailable slots
- Status badge rendering
- Booking filters
- Booking status update helpers
- Booking stats calculation
- localStorage helpers

Suggested test files:

```txt
BookingForm.test.tsx
TimeSlotButton.test.tsx
StatusBadge.test.tsx
bookingUtils.test.ts
filters.test.ts
storage.test.ts
```

Use Playwright for end-to-end flows.

### E2E Flow 1: Customer books a service

Steps:

```txt
open home page
select service category
enter location
select date
click Find services
open results page
click View availability
select available slot
fill booking form
submit booking
see confirmation page
verify booking reference is visible
```

### E2E Flow 2: Business confirms booking

Steps:

```txt
open business bookings page
find new booking
open booking detail panel
click Confirm
verify status changes to Confirmed
refresh page
verify status is still Confirmed
```

---

## 16. Accessibility Standards

Follow basic WCAG-friendly practices.

Requirements:

- Semantic HTML
- Real buttons for actions
- Real links for navigation
- Visible focus states
- Sufficient colour contrast
- Labels for all form fields
- Error messages connected to inputs
- Keyboard-accessible modals/drawers where used
- No important information conveyed by colour alone
- Use `aria-current` for active navigation where appropriate
- Use `aria-disabled` or disabled attributes correctly

---

## 17. Responsive Design Standards

Support:

- Mobile
- Tablet
- Desktop

General rules:

- Mobile-first Tailwind classes
- Search panel should stack on mobile
- Cards should be readable on small screens
- Tables may become cards/lists on mobile
- Business dashboard should remain usable on tablet
- Touch targets should be comfortable
- Avoid horizontal scrolling except where intentional

---

## 18. Performance and Quality Standards

Keep the app lightweight.

Requirements:

- Avoid unnecessary client components
- Use client components only where interactivity is required
- Keep large stateful logic out of page files
- Memoise only when needed
- Avoid premature optimisation
- Use static mock data where possible
- Avoid heavy animation libraries
- Avoid unused dependencies
- Keep bundle size reasonable

---

## 19. Implementation Order

Do not build everything at once.

Recommended phases:

1. Project setup
   - Next.js App Router
   - TypeScript
   - Tailwind
   - ESLint
   - Vitest
   - React Testing Library
   - Playwright

2. Design system foundation
   - Tailwind tokens
   - Global styles
   - Typography
   - Base layout rules

3. Types and mock data
   - Service
   - Provider
   - AvailabilitySlot
   - Booking
   - Mock data files

4. Base UI components
   - Button
   - Input
   - Select
   - Textarea
   - Card
   - Badge
   - EmptyState
   - Modal/Drawer if needed

5. Layout
   - Header
   - PageShell
   - BusinessSidebar
   - Container

6. Customer Home/Search page

7. Search Results page

8. Service Details & Booking page

9. Booking creation + localStorage persistence

10. Booking Confirmation page

11. Business Dashboard page

12. Bookings Management page

13. Booking status changes + filters

14. Availability Management page

15. Tests

16. Responsive polish

17. README

18. Vercel deployment preparation

---

## 20. Coding Rules

General rules:

- Use TypeScript everywhere.
- Avoid `any`.
- Keep components small.
- Extract repeated UI into components.
- Extract repeated logic into helpers.
- Use meaningful names.
- Prefer clarity over cleverness.
- Do not introduce unnecessary dependencies.
- Do not mix unrelated responsibilities in one component.
- Do not leave TODOs for core MVP behaviour.
- Do not create active UI controls that do nothing.
- Keep page files readable and mostly compositional.

React rules:

- Use server components by default.
- Use `"use client"` only for interactive components.
- Keep form logic inside form components.
- Keep local UI state close to where it is used.
- Move shared booking/availability state into a store only when needed.

Styling rules:

- Use Tailwind utilities.
- Keep class names readable.
- Extract repeated patterns into components.
- Avoid hard-coded random colours.
- Use design tokens.
- Maintain consistent spacing, radius, shadow, and typography.

---

## 21. Definition of Done

The MVP is complete when:

- Customer can search for a service.
- Customer can view filtered results.
- Customer can open a service/provider details page.
- Customer can select an available time slot.
- Customer can submit a valid booking form.
- Confirmation page shows booking reference and details.
- Booking appears in the business area.
- Business dashboard stats are calculated from bookings.
- Business can search and filter bookings.
- Business can confirm, cancel, and complete bookings.
- Business can add/remove/block availability slots.
- Booked slots cannot be selected by customers.
- Slot and booking changes persist after refresh.
- Empty states are handled.
- Disabled/coming-soon features are clearly marked.
- Main flows are covered by tests.
- UI is responsive.
- UI follows the warm commercial booking-product design direction.
- README explains setup, scripts, architecture, and demo flows.
- Project can be deployed to Vercel.

---

## 22. First Task for Claude Code

Start with planning and setup only.

Do not implement the full app in one step.

First implementation task:

```txt
Create a new Next.js App Router project with TypeScript and Tailwind CSS.
Set up the commercial-quality folder structure.
Add core TypeScript models.
Add mock data files.
Create the base UI components: Button, Card, Input, Select, Textarea, and Badge.
Configure initial Tailwind design tokens for the warm ServiceFlow visual style.
Do not build all pages yet.
```

After this first step, review the structure and base UI before moving to the customer pages.
