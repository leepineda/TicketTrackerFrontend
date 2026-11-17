# Changelog

# Frontend Changelog (ticket-tracker-ui)

## Unreleased (v0.2.0 in progress)

### Added
- Bootstrap for styling (`bootstrap` package, imported in `main.jsx`)

### Changed
- Refactored the single-file app into layers:
  - `api/ticketsApi.js`: all fetch calls and error handling
  - `hooks/useTickets.js`: ticket state and logic (load, add, remove)
  - `components/`: `TicketForm`, `TicketList`, `TicketItem`
  - `App.jsx` only assembles the pieces
- The ticket form only clears after the ticket was created successfully
- Priority and status shown as badges
- Replaced the Vite starter CSS with a minimal `index.css`

### Fixed
- Blank page caused by `TicketForm` missing its `return`
- Create ticket failing until the database migration for `CategoryId` was applied

### Known issues
- TODO(sec): `userId` is hardcoded to 1 in `TicketForm`. It comes from the JWT after login is built.
- TODO(sec): Plan how the token is stored. `localStorage` is simple but readable by any injected script, so decide before shipping login.
- No register or login pages yet.
- No category or department dropdowns yet, and no edit ticket form.
- No tests yet.

## v0.1.0 - 2026-11-14
Initial frontend: a React app that talks to the ticket API.

### Added
- React app created with Vite, running separately from the API (localhost:5173)
- Ticket list loaded from `GET /api/tickets`
- Create ticket form (title, description, priority) calling `POST /api/tickets`
- Delete button on each ticket calling `DELETE /api/tickets/{id}`
- Error message shown when a request fails

## Planned
- v0.2: Register and login pages, token handling, category and department dropdowns, edit ticket
- v0.3: 

## v0.1.0 - 2026-11-14
### Added
- Ticket list loaded from GET /api/tickets
- Create ticket form (title, description, priority)
- Delete button per ticket

### Known issues
- TODO(sec): userId is hardcoded to 1 in the create request. Replace with login in v0.2.
- No update/edit yet, no auth, no styling.

