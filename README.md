# Video Management Application

### GitHub Repository:
[Video Management Application](https://github.com/webdeveshverma/Full-Stack-Developer-Assignment-Video-Management-Application)

---

## Backend

### Installation

Add .env file 

PORT=5005
MONGO_URI=""
JWT_SECRET=""


1. Clone the repository:
    ```bash
    git clone https://github.com/webdeveshverma/Full-Stack-Developer-Assignment-Video-Management-Application.git
    cd video-management-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start
    ```
    The backend runs on `http://localhost:5005`.



### API Endpoints

- **POST `/api/auth/register`**: Register a new user.
- **POST `/api/auth/login`**: Login and get a JWT token.
- **POST `/api/videos/upload`**: Upload a new video (requires authentication).
- **GET `/api/videos`**: Get all videos for the logged-in user.

---

## Frontend

### Installation

1. Navigate to `video-management-frontend`:
    ```bash
    cd video-management-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend server:
    ```bash
    npm start
    ```
    The frontend runs on `http://localhost:3000`.

### Features

- User login and authentication with JWT.
- Video upload, filtering, pagination, and metadata generation.
- Dashboard displaying user-specific videos.

---

## Tech Stack

- **Backend**: Node.js, Express, MongoDB, JWT Authentication.
- **Frontend**: React, Material-UI, Axios, Redux.

