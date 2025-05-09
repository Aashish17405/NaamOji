const express = require("express");
const connectDB = require("./src/config/db");
const actionRoutes = require("./src/routes/actionRoutes");
// const rateLimit = require('express-rate-limit');
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// const limiter = rateLimit({
// 	windowMs: 1 * 60 * 1000,
// 	limit: 5, 
// 	standardHeaders: 'draft-8', 
// 	legacyHeaders: false,
// })

const allowedOrigins = ['https://naamoji.dev-aashish.tech/', 'http://localhost:5173'];

app.use(cors());
// app.use(limiter);
app.use(express.json());
app.use(actionRoutes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();
