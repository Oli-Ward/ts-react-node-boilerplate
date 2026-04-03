# Node + React Boilerplate

Full stack boilerplate with Node.js/Express API and React (Vite + TypeScript) client.

## Tech Stack

**Server:** Node.js, Express, SQLite (better-sqlite3)  
**Client:** React, TypeScript, Vite

## Getting Started

### Prerequisites

- Node 24 (use `nvm use`)

### Install dependencies

npm install --prefix server && npm install --prefix client

### Run development servers

npm run dev

### Environment variables

Copy `.env.example` to `.env` in the server folder and fill in values.

## Project Structure

├── client/ # React + Vite + TypeScript
├── server/ # Node.js + Express
│ ├── src/
│ │ ├── routes/
│ │ ├── controllers/
│ │ ├── services/
│ │ ├── repositories/
│ │ ├── models/
│ │ └── middleware/
├── postman/ # Postman collection + environment
├── .nvmrc
└── README.md

## API Endpoints

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| GET    | /api/items     | Get all items  |
| GET    | /api/items/:id | Get item by ID |
| POST   | /api/items     | Create item    |
| PUT    | /api/items/:id | Update item    |
| DELETE | /api/items/:id | Delete item    |
