# Managing Events & Readings

How to add, edit, and manage events on your Events page.

---

## Where Events Live

Events are defined as a data array in `app/events/page.tsx`. They don't use separate files — just edit the array directly.

---

## Adding a New Event

Open `app/events/page.tsx` and find the `events` array near the top. Add a new object:

```typescript
const events: AuthorEvent[] = [
  {
    date: '2025-08-15',
    title: 'Poetry Reading at Blue Door Books',
    location: 'Blue Door Books, Portland, OR',
    description: 'An evening of poetry and conversation. Signed copies available.',
    link: 'https://example.com/event-page',
  },
  // ... more events
]
```

**Fields:**

| Field | Required | Description |
|---|---|---|
| `date` | Yes | Event date in `YYYY-MM-DD` format |
| `title` | Yes | Name of the event |
| `location` | Yes | Venue name and city |
| `description` | Yes | Short description (1-2 sentences) |
| `link` | No | URL for tickets, RSVP, or more info (use `''` if none) |

---

## How Events Display

The page automatically splits events into two sections:
- **Upcoming Events** — events with dates today or in the future
- **Past Events** — events with dates before today

When there are no upcoming events, the page shows a friendly message: "New dates coming soon."

Events are sorted by date within each section.

---

## Editing an Event

Find the event in the `events` array and change the fields. Commit and push.

---

## Removing an Event

Delete the entire object (from `{` to `},`) from the array. Past events can be kept for a history/archive or removed.

---

## The "Invite Heather" Section

At the bottom of the events page there's a section inviting people to book Heather for readings. This links to the Contact page. To change the text, edit the section near the bottom of the file labeled `{/* Invite */}`.

---

## Tips

- Keep the events array in date order (newest at top) for easy management
- The page handles empty states gracefully — it's fine to have zero events
- Past events automatically move to the "Past" section, no action needed
- Use the `link` field for ticket/RSVP pages, or leave it as `''` if there's no external link
