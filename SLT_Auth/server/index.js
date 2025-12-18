import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectdb from "./config/mongodb.js";
import routes from "./route/userroute.js";
import passport from "passport";
import "./config/passport.js";

// 1️⃣ Initialize express app FIRST
const app = express();
const PORT = process.env.PORT || 4000;

// 2️⃣ Connect DB
connectdb();

// 3️⃣ Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());  
app.use(cookieParser());

// 4️⃣ Passport initialize AFTER app
app.use(passport.initialize());

// 5️⃣ Test route
app.get("/", (req, res) => res.send("Server is running..."));

// 6️⃣ API routes
app.use("/api/user", routes);

// 7️⃣ Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
