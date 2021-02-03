const router = require('express').Router();
const { db, articleCollection, webAPI } = require('../index')

// import database stuff here

// we need to consider user here
router.post('/', async (req, res, next) => {
  try {
    const articles = {
      summary: req.body['summary'],
      title: req.body['title'],
      url: req.body['url'],
      id: req.body['id']
    }
    const newDoc = await db.collection(articleCollection).add(articles);
    res.status(201).send(`Created a new user: ${newDoc.id}`);
  } catch (error) {
    next(error)
  }
})
