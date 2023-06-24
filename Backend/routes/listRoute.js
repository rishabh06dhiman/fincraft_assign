const express = require("express");
const { getList,createRow, getListSearch } = require("../controller/listController");

const router = express.Router();

router.route("/list").get(getList);
router.route("/row/new").post(createRow);

module.exports = router 