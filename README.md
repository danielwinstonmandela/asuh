# ASUH

ASUH is a bilingual elderly-care product prototype for hackathon pitching. It connects daily well-being check-ins, family coordination, companion visits, medication support, guided health resources, community events, learning, and connected-device safety flows. It uses local prototype data only—no accounts, payments, clinical integrations, or emergency dispatch.

## Run locally

```bash
npm install
npm run dev
```

## First-run and language behavior

New visitors complete a short, role-specific setup for an Older Adult, Family Member, or Companion. The persistent role selector is intentionally available for demos. English is the default; the EN/ID switch updates all interface copy and persists with the selected role after refresh.

## Main product routes

- `/` and `/check-in` — older-adult home and accessible daily check-in
- `/family` and `/family/alerts/[id]` — family care dashboard and alert response
- `/family/companions` and `/family/bookings/[id]` — matching, booking, and visit report
- `/companions` — companion opportunities, visit lifecycle, and reporting
- `/health` — guided ASUH Nurse, pharmacy, clinic, referral, and consultation flows
- `/community` and `/learn` — events, discussion/audio participation, and saved learning
- `/premium` — simulated wearable, motion, fall/inactivity, and SOS experience
- `/settings` — profile, consent, family circle, and language preferences

## Prototype boundaries

ASUH does not diagnose, prescribe, provide medical procedures, replace a clinician, or dispatch emergency services. Device values, companion records, pharmacies, clinics, and appointments are realistic seeded examples only.

## Söhne font

The app uses the supplied Söhne variable font when available. Place the appropriately licensed file at `public/fonts/sohne-var.woff2`; until then, the included typography stack uses a visually compatible fallback.

## Deploy to Vercel

Import this repository into Vercel, leave build settings at their Next.js defaults, and deploy. The prototype has no environment variables.

## Browser checks

With the local development server running on port 3000, run:

```bash
npm run test:e2e
```
# asuh
