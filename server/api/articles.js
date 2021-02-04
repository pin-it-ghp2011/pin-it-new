const router = require("express").Router();
const { db, articlesCollection } = require("../index");

console.log("db :", db);

// import database stuff here

//get artcicles
router.get("/", async (req, res, next) => {
  try {
    console.log("EXPECTED BODY: ", req.body);
    const newDoc = await db.collection(articlesCollection).get();
    res.status(201).json(`articles: ${newDoc}`);
  } catch (error) {
    next(error);
  }
});

// we need to consider user here
router.post("/", async (req, res, next) => {
  try {
    console.log("EXPECTED BODY: ", req.body);
    const articles = {
      body: req.body["body"],
      title: req.body["title"],
      url: req.body["url"],
    };
    const newDoc = await db.collection(articlesCollection).add(articles);
    res.status(201).send(`Created a new article: ${newDoc.id}`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
