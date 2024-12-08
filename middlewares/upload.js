const multer = require("multer");
const path = require("path");

// Set storage options
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Define folder for saving the image
  },
  filename: (req, file, cb) => {
    // Use the original file name and add a timestamp to avoid overwriting
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Define file filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG, PNG and JPG are allowed!"), false);
  }
};

// Set up multer with the defined storage and file filter
const upload = multer({ storage, fileFilter });

module.exports = upload;
