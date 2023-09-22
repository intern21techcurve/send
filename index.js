const express = require("express");
const app = express();
const uploadRoutes = require("./route");

// Load environment variables from .env file using dotenv
require("dotenv").config();

// Include other middleware and configurations as needed

// Include your file upload routes

app.use("/api", uploadRoutes);

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
