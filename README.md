### Video Management Application
## A Video Management Application built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to upload, view, and manage their video collections with features like user authentication, pagination, and metadata generation.

GitHub Repository:
Video Management Application

Backend
Installation
Clone the repository:

bash
git clone https://github.com/webdeveshverma/Full-Stack-Developer-Assignment-Video-Management-Application.git
cd video-management-backend
Install dependencies:
bash
npm install
Start the server:

bash
Copy
Edit
npm start
The backend runs on http://localhost:5005.

API Endpoints
POST /api/auth/register: Register a new user.

POST /api/auth/login: Login and get a JWT token.

POST /api/videos/upload: Upload a new video (requires authentication).

GET /api/videos: Get all videos for the logged-in user.

Frontend
Installation
Navigate to video-management-frontend:

bash
cd video-management-frontend
Install dependencies:

bash
npm install
Start the frontend server:

bash
npm start
The frontend runs on http://localhost:3000.

Features
User login and authentication with JWT.

Video upload, filtering, pagination, and metadata generation.

Dashboard displaying user-specific videos.

Tech Stack
Backend: Node.js, Express, MongoDB, JWT Authentication.

Frontend: React, Material-UI, Axios, Redux.

