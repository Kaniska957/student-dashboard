# Student Dashboard

A modern student learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## Features

* Dark mode dashboard UI
* Bento grid layout
* Dynamic course data fetched from Supabase
* Server-side data fetching using Next.js App Router
* Animated progress indicators
* Framer Motion staggered animations
* Loading skeletons
* Error handling
* Responsive design for desktop, tablet, and mobile

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion

## Database Schema

### courses

| Column     | Type      |
| ---------- | --------- |
| id         | uuid      |
| title      | text      |
| progress   | integer   |
| icon_name  | text      |
| created_at | timestamp |

## Environment Variables

Create a `.env.local` file and add:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

## Installation

```bash
npm install
npm run dev
```

## Architecture

* Server Components used for fetching course data from Supabase.
* Reusable component structure for Hero Tile, Course Cards, Activity Tile, and Sidebar.
* Framer Motion used for animations and interactive UI elements.
* Tailwind CSS used for styling and responsive layouts.

## Deployment

The application is deployed using Vercel and connected to GitHub for automatic deployments.
