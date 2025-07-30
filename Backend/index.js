import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Importing routes
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

// Initialize express app
const app = express();

// Middlewares
app.use(cors(
    {
        origin: ["http://localhost:5173","https://book-store-p3sj.vercel.app/"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
));
app.use(express.json());

// Load environment variables
dotenv.config();

// Get PORT and MongoDB URI from .env
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1); // Stop the app if DB fails
    }
};

// Call the DB connection

// Route definitions
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start the server
app.listen(PORT, () => {
    connectDB();
    console.log(`🚀 Server is listening on port ${PORT}`);
});
