const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

// Database Connection (Only if using MongoDB)
if (process.env.MONGO_URI) {
    mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("DB connection error:", err));
  
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
