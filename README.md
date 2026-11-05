<div align="center">
<img width="1200" height="475" alt="Laundry Management System Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Laundry Management System

A full-stack laundry shop management application built with React, TypeScript, Express, and SQLite.

## Features

- **Customer Booking**: Online laundry service booking with pickup/delivery options
- **Machine Management**: Track washers, dryers, and all-in-one machines with real-time status
- **Order Tracking**: Track laundry orders through various stages (pending → washing → drying → ready → completed)
- **Admin Dashboard**: Manage orders, view sales reports, and handle customer accounts
- **Receipt Generation**: Generate and print receipts for completed transactions
- **Sales Reports**: View daily sales, service breakdowns, and business analytics

## Tech Stack

- **Frontend**: React 19, TypeScript, TailwindCSS, Motion
- **Backend**: Express.js, SQLite
- **Authentication**: JWT (JSON Web Tokens)
- **Build Tool**: Vite

## Prerequisites

- Node.js (v18 or higher)
- npm

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   Copy `.env.example` to `.env` and update the values:
   ```bash
   cp .env.example .env
   ```

3. Run the application:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:8080`

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 8080 |
| DB_NAME | SQLite database file | laundry.db |
| ADMIN_PASSWORD | Admin login password | admin123 |
| JWT_SECRET | Secret key for JWT | auto-generated |
| MACHINE_DEFAULT_TIME | Default machine timer (seconds) | 2700 |

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── admin/          # Admin dashboard components
│   │   ├── AdminLogin.tsx  # Admin authentication
│   │   ├── Receipt.tsx     # Receipt generation
│   │   └── App.tsx         # Main application
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces
│   └── main.tsx            # React entry point
├── server.ts               # Express server & API routes
├── scripts/
│   └── backup.ts           # Database backup script
└── package.json
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run backup` | Backup the database |

## Railway Variables

Set these in Railway > Service > Variables (no quotes around values):

- JWT_SECRET (32+ characters)
- ADMIN_PASSWORD (12+ characters)
- PORT (optional, default 3000)
- DB_NAME (optional, default laundry.db)
- SQLITE_PATH (optional, default laundry.db)
- MACHINE_DEFAULT_TIME (optional, default 2700)
- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM (required for verification emails)
- SMTP_SECURE (optional; defaults to `true` for port 465, otherwise `false`)

## Database

The application uses SQLite (better-sqlite3) for storage.

### Commands
- Backup SQLite: `npm run backup`
- Run tests: `npm test`
- Type check: `npm run lint`

## License
MIT
