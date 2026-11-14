# Ticket Tracker Frontend

React (Vite) frontend for [TicketTrackerApi](https://github.com/leepineda/TicketTrackerApi), an ASP.NET Core REST API with SQL Server.

## Features
- List, create and delete tickets

## Run it
1. Start the API (needs Docker for SQL Server): 

docker compose up -d

dotnet run

2. In this folder: 

npm install

npm run dev

3. Open http://localhost:5173

The API is expected at http://localhost:5144 (set in src/App.jsx).

## Changelog
See [CHANGELOG.md](CHANGELOG.md).