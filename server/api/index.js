'use strict';
const router = require('express').Router();

router.use('/singleArticle', require('./singleArticle'));
router.use('/articles', require('./articles'));

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
