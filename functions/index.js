const functions = require('firebase-functions');
const admin = require('firebase-admin');

const express = require('express');
const cors = require('cors');
const app = express();
const puppeteer = require('puppeteer');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});

admin.initializeApp();
const db = admin.firestore();

app.use(cors({ origin: true }));

app.get('/helloWorld', (req, res) => {
  return res.status(200).send('hello world');
  // const snapshot = await db.collection('articles').get();
  // console.log('hello');
  // let articles = [];
  // snapshot.forEach((doc) => {
  //   let id = doc.id;
  //   let data = doc.data();
  //   articles.push({ id, ...data });
  //   console.log(articles);
  // });
  // res.status(200).send(JSON.stringify(articles));
});

app.post('/', async (req, res) => {
  const newArticle = req.body;

  await db.collection('articles').add(newArticle);
  res.status(201).send();
});

app.get('/:id', async (req, res) => {
  const snapshot = await admin
    .firestore()
    .collection('articles')
    .doc(req.params.id)
    .get();
  const articleId = snapshot.id;
  const articleData = snapshot.data();
  res.status(200).send(JSON.stringify({ id: articleId, ...articleData }));
});

exports.app = functions.https.onRequest(app);
