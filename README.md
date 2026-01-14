# SLT Auth

## Overview
SLT Auth is a full-stack authentication application built using modern web technologies. It includes a frontend built with Vite and React, and a backend powered by Node.js, Express, and MongoDB. The application provides user authentication features such as registration, login, and profile management.

## Features
- User registration and login
- Profile management
- Secure authentication using Passport.js
- MongoDB for data storage
- Modular and scalable code structure

## Project Structure
```
SLT_Auth/
  myviteapp/       # Frontend application
    src/           # Source code for React components
      component/   # Reusable components (Header, Footer, Layout)
      pages/       # Page components (Home, Login, Register, etc.)
    public/        # Static assets
    vite.config.js # Vite configuration
  server/          # Backend application
    config/        # Configuration files (MongoDB, Passport.js)
    model/         # Mongoose models
    route/         # Express routes
```

## Frontend Setup
1. Navigate to the `myviteapp` directory:
   ```bash
   cd SLT_Auth/myviteapp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser at `http://localhost:5173`.

## Backend Setup
1. Navigate to the `server` directory:
   ```bash
   cd SLT_Auth/server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node index.js
   ```
4. The backend will run on `http://localhost:3000`.

## Environment Variables
Create a `.env` file in the `server` directory with the following variables:
```
MONGO_URI=<your_mongodb_connection_string>
PORT=3000
SESSION_SECRET=<your_secret_key>
```

## Technologies Used
### Frontend
- React
- Vite
- CSS

### Backend
- Node.js
- Express
- MongoDB
- Passport.js

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## Screenshots
<img width="1920" height="1080" alt="Screenshot (129)" src="https://github.com/user-attachments/assets/b4dab2f2-0d5d-47fc-be39-85d1684948b8" />

## License
This project is licensed under the MIT License.
