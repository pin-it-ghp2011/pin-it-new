"use strict";
const router = require("express").Router();

const articlesRouter = require("./articles");
router.use("/articles", articlesRouter);

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
