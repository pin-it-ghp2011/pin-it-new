const router = require("express").Router();
const { db, articlesCollection, webAPI } = require("../index");

// import database stuff here

// we need to consider user here
router.post("/", async (req, res, next) => {
  try {
    const articles = {
      summary: req.body["body"],
      title: req.body["title"],
      url: req.body["url"],
    };
    const newDoc = await db.collection(articlesCollection).add(articles);
    res.status(201).send(`Created a new user: ${newDoc.id}`);
  } catch (error) {
    next(error);
  }
});
