# Full-Stack Company Location Viewer

## Overview

This project is a full-stack web application that displays a list of companies and their details, including multiple possible locations. The application includes a Python backend API, a React frontend with a two-page structure, and map integration. The entire setup is containerized using Docker.

## Requirements

- Python (Flask/FastAPI/Django)
- React
- Docker and Docker Compose

## Project Structure

```plaintext
full-stack-application/
├── backend/
│   ├── README.md
├── data
│   ├── companies.csv
│   └── locations.csv
├── exceptions
│   └── custom_exceptions.py
├── main.py
├── models
│   ├── company.py
│   └── location.py
├── postman_collection
│   └── collection.json
├── requirements.txt
├── routers
│   ├── companies.py
│   └── locations.py
├── services
│   ├── company_service.py
│   └── location_service.py
└── utils
    └── logger.py
├── frontend/
│   ├── public/
|
│   ├── src/
|       ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── index.html
│   │   └── test/
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
├── companies.csv
├── locations.csv
└── README.md
```

## Setup

### Prerequisites

```

- Node.js (version 14.x or later)
- npm or yarn
- Docker and Docker Compose

```

### Environment Variables

Create a .env file in the backend directory and copy the contents of .env.example into it. Replace the values with your actual environment-specific values.

### Using Docker

Build and run the containers:

```
docker-compose up --build
```

### Access the application:

Frontend: http://localhost:3000
Backend API: http://localhost:8000

**Swagger UI:** http://127.0.0.1:8000/docs

### License

This project is licensed under the MIT License.
