# SLT Auth

## Overview
SLT Auth is a web application that provides authentication and user management features. It includes a frontend built with Vite and React, and a backend powered by Node.js, Express, and MongoDB.

## Features
- User registration and login
- Google OAuth integration
- Profile management
- MongoDB Atlas database

## Technologies Used
### Frontend
- React
- Vite
- Tailwind CSS (if applicable)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Passport.js for authentication

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/SLT_auth.git
   ```
2. Navigate to the project directory:
   ```bash
   cd SLT_auth
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   cd SLT_Auth/myviteapp
   npm install
   cd ../server
   npm install
   ```
4. Configure environment variables:
   - Create a `.env` file in the `server` directory with the following:
     ```env
     GOOGLE_CLIENT_ID=your-google-client-id
     GOOGLE_CLIENT_SECRET=your-google-client-secret
     MONGO_URI=your-mongodb-connection-string
     PORT=4000
     ```
5. Start the development servers:
   - Frontend:
     ```bash
     cd SLT_Auth/myviteapp
     npm run dev
     ```
   - Backend:
     ```bash
     cd ../server
     npm start
     ```

## Folder Structure
```
SLT_Auth/
  myviteapp/       # Frontend code
    src/           # React components and pages
  server/          # Backend code
    config/        # Configuration files (e.g., MongoDB, Passport)
    model/         # Mongoose models
    route/         # API routes
```

## License
This project is licensed under the MIT License.