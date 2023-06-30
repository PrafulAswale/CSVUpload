const express = require("express");
const router = express.Router();
const multer = require("multer");

const { home, csvAll } = require("../controllers/home_controller");
const { upload, view } = require("../controllers/csv_controller");
const uploads = multer({ dest: "uploads/" });

router.get("/", home);
router.get("/csv/all", csvAll);
router.get("/csv/:id", view);
router.post("/upload", uploads.single("csv"), upload);

module.exports = router;
