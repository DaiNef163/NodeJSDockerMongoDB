const express = require("express");
const { getHomePage, postCreateUser, getEdit, getDisplay, postEdit, getDelete, postDelete } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.post("/create-user", postCreateUser);

router.get("/edit/:id", getEdit);
router.post("/edit-user", postEdit);


router.get("/display",getDisplay);


router.get("/delete/:id", getDelete);
router.post("/delete-user", postDelete);


module.exports = router;
