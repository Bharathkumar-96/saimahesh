const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',  // Make sure this matches your React app's URL
    credentials: true  // This is optional, enable if needed for handling cookies
}));
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});
// Database Connection (Only if using MongoDB)
if (process.env.MONGO_URI) {
    mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("DB connection error:", err));
  
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
