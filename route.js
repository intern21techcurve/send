const express = require("express");
const upload = require("./upload"); // Make sure to adjust the path accordingly

const router = express.Router();

// Define your upload routes here
router.post("/upload", upload.single("file"), (req, res) => {
  // Handle the file upload and response logic here
  if (req.file) {
    // File uploaded successfully
    res.status(200).json({ message: "File uploaded successfully", file: req.file });
  } else {
    // File upload failed
    res.status(400).json({ message: "File upload failed" });
  }
});

module.exports = router;
