# Teacher Portal

A full-stack web application built with CodeIgniter 4 (backend) and ReactJS (frontend) with JWT authentication.

## Tech Stack

- **Backend:** CodeIgniter 4 (PHP)
- **Frontend:** ReactJS + Vite
- **Database:** MySQL
- **Authentication:** JWT (JSON Web Tokens)

## Features

- User Registration and Login
- JWT Token-based Authentication
- Protected API Routes
- Add Teacher with linked User account (single POST API)
- View all Users datatable
- View all Teachers datatable

## Database Tables

- `auth_user` - stores basic user credentials
- `teachers` - stores teacher info with `user_id` foreign key (1-1 relationship)

## Project Structure

```
teacher-portal/
  backend/   → CodeIgniter 4 REST API
  frontend/  → ReactJS Application
  database/  → SQL export file
```

## Setup Instructions

### Requirements

- PHP 8.3+
- Composer
- MySQL
- Node.js

### Backend Setup

1. Clone the repository
2. Navigate to backend folder:

```bash
cd backend
```

3. Install dependencies:

```bash
composer install --ignore-platform-reqs
```

4. Copy and configure environment:

```bash
cp env .env
```

5. Update `.env` with your database credentials:

```
CI_ENVIRONMENT = development
database.default.hostname = localhost
database.default.database = teacher_db
database.default.username = root
database.default.password =
database.default.DBDriver = MySQLi
database.default.port = 3306
```

6. Import the database:
   - Create database `teacher_db` in MySQL
   - Import `database/teacher_db.sql`
7. Start the server:

```bash
php spark serve
```

Backend runs on: `http://localhost:8080`

### Frontend Setup

1. Navigate to frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

Frontend runs on: `http://localhost:5173`

## API Endpoints

| Method | Endpoint             | Auth | Description      |
| ------ | -------------------- | ---- | ---------------- |
| POST   | `/api/auth/register` | No   | Register user    |
| POST   | `/api/auth/login`    | No   | Login user       |
| GET    | `/api/auth/users`    | Yes  | Get all users    |
| POST   | `/api/teachers`      | Yes  | Add teacher      |
| GET    | `/api/teachers`      | Yes  | Get all teachers |

## Screenshots

- Login Page
- Register Page
- Dashboard
- Users Table
- Teachers Table
- Add Teacher Form
