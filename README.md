# Telegram Mini App with Golang Backend and React Frontend

This project demonstrates a simple Telegram Mini App with a Golang backend and React frontend.

## Backend

The backend is a simple Golang server that provides an API endpoint.

To run the backend:

```bash
cd backend
go run .
```

The server will start on http://localhost:8080

## Frontend

The frontend is a React application that communicates with the backend and uses the Telegram Web App SDK.

To run the frontend:

```bash
cd frontend
yarn
yarn start
```

The development server will start on http://localhost:3000

## Deployment

For production, build the React app and serve it statically, and deploy the Golang backend to a server of your choice.

Remember to update the API URL in the frontend code when deploying to production.
