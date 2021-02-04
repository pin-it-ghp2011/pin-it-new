//import libraries
// const functions = require("firebase-functions");
const firebase = require("../src/firebaseConfig");
// const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("express").Router();

//initialize firebase inorder to access its services
// admin.initializeApp(functions.config().firebase);

//initialize express server
const app = express();
//app.use("/api/v1", router);
const main = express();

//add the path to receive request and set json as bodyParser to process the body
main.use("./api/v1", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
main.use(express.static(path.join(__dirname, "../public")));

//initialize the database and the collection
export const db = firebase.firestore();
export const articlesCollection = "articles";

main.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
}); // Send index.html for any other requests

// error handling middleware
main.use((err, req, res, next) => {
  // if (process.env.NODE_ENV !== 'test') console.error(err.stack)
  res.status(err.status || 500).send(err.message || "Internal server error");
});

// //define google cloud function name
// export const webApi = functions.https.onRequest(app);

module.exports = main;
