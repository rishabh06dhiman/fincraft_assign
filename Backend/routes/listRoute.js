const express = require("express");
const { getList,createRow } = require("../controller/listController");

const router = express.Router();

router.route("/list").get(getList);
router.route("/row/new").post(createRow);

module.exports = router 