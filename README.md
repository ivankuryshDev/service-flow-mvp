# ServiceFlow

A frontend-only portfolio MVP for a local service booking and availability platform.

ServiceFlow lets customers search for local services, compare providers, and book available time slots. Business owners can manage bookings, update statuses, and control their availability — all in a polished, commercial-quality UI.

> **Portfolio note:** This is a frontend demo with no backend, database, authentication, or payment processing. All data is static mock data. The app is designed to showcase real-world frontend engineering: routing, reusable components, form validation, booking flows, business dashboards, responsive design, and accessibility.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Forms | React Hook Form + Zod |
| Package manager | pnpm |
| Fonts | Bricolage Grotesque, Plus Jakarta Sans, DM Mono |
| Deployment | Vercel |

---

## Local setup

**Prerequisites:** Node.js 18+ and pnpm installed.

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Script | Description |
|---|---|
| `pnpm dev` | Start local development server |
| `pnpm build` | Build for production |
| `pnpm start` | Run the production build locally |
| `pnpm lint` | Run ESLint |

---

## Routes

### Customer

| Route | Description |
|---|---|
| `/` | Home — hero section, service category search, date and location inputs |
| `/results` | Search results — filtered provider cards based on query params |
| `/services/[id]` | Service details and booking — time slot selection, booking form |
| `/booking/confirmation` | Booking confirmation — reference number and booking summary |

### Business

| Route | Description |
|---|---|
| `/business` | Dashboard — stats overview, today's bookings, recent activity |
| `/business/bookings` | Bookings management — search, filter, status actions, detail panel |
| `/business/availability` | Availability management — weekly view, add/remove/block slots |

---

## Data and state

- All demo data lives in `src/data/` as static TypeScript files (services, providers, availability slots, bookings).
- The customer booking flow passes selected filters and booking state via URL query parameters between pages.
- Business pages read directly from the static mock data.
- There is no localStorage, no backend, no database, no authentication, and no payment processing in this MVP.

---

## Key demo flows

### Customer: book a service

1. Open `/` and select a service category, location, and date.
2. Click **Find services** to navigate to `/results`.
3. Click **View availability** on a provider card.
4. Select an available time slot on the service details page.
5. Fill in your name and contact details, then click **Confirm booking**.
6. The confirmation page shows your booking reference and a summary.

### Business: manage bookings

1. Open `/business` to see the dashboard overview and today's stats.
2. Navigate to `/business/bookings` to see all bookings.
3. Use search, status, and date filters to find a booking.
4. Click a row to open the detail panel.
5. Confirm, cancel, or mark a booking as completed using the action buttons.

### Business: manage availability

1. Open `/business/availability` to see the current week.
2. Click **Add time slot** to add a new available slot.
3. Use the slot actions to block or remove existing slots.

---

## Deployment

No environment variables are required. The app is fully static-data frontend.

**Deploy to Vercel in one step:**

1. Push the repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Vercel auto-detects Next.js — no additional configuration needed.
4. Click **Deploy**.

---

## Project structure

```
src/
  app/                  # Next.js App Router pages
  components/
    ui/                 # Reusable base components (Button, Card, Badge, etc.)
    layout/             # Header, sidebar, page shell
    customer/           # Customer-facing feature components
    business/           # Business dashboard feature components
  data/                 # Static mock data (services, providers, bookings, slots)
  lib/                  # Utility functions (dates, formatters, filters, cn)
  types/                # Shared TypeScript types
```

---

## Future improvements

- Real backend API (e.g. Next.js route handlers + PostgreSQL)
- User authentication (business and customer accounts)
- Calendar integration for availability sync
- Email or SMS booking confirmations
- Payment processing
- Provider onboarding flow
- Search with real geolocation
- Admin analytics dashboard
