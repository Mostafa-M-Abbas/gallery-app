"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const photo_model_1 = require("../models/photo.model");
const router = (0, express_1.Router)();
const multer = require("multer");
const path = require("path");
const { Photo } = require("../models/photo.model"); 
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../cloudinary.config");
router.get('/', async (req, res, next) => {
    try {
        const photos = await photo_model_1.Photo.find();
        /** @TODO Render Existing Photos in index.ejs */
        res.render('index', { photos });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
router.post('/', 
/** @TODO Add multer middleware */
async (req, res, next) => {
    try {
        /** @TODO Save Photo in database */
        res.redirect('/');
    }
    catch (err) {
        console.error(err);
        next(err);
    }
    });
const storage = multer.diskStorage({
  cloudinary: cloudinary,
  params: {
    folder: "gallery-app", // Folder name in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png"], // File types allowed
  },
});

const upload = multer({ storage });

// multer middleware
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { path, originalname } = req.file;
    console.log(`Uploaded file URL: ${path}`);

    const newPhoto = new Photo({
      path: path, // URL of the uploaded file in Cloudinary
      title: req.body.title || originalname, // Title from user input or original file name
    });

    await newPhoto.save();
    res.status(200).send("File uploaded and saved to database.");
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).send("An error occurred while uploading the file.");
  }
})
app.get("/upload", async (req, res) => {
  try {
    // Fetch photos from the database
    const photos = await Photo.find();

    // Render them in the gallery view
    res.render("upload", { photos });
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).send("An error occurred while fetching images.");
  }
});


exports.default = router;
