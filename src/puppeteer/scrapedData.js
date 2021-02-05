const firebaseConfig = require('firebase')
const puppeteer = require('puppeteer');
const fs = require('fs')
const admin = require('firebase-admin');
const functions = require('firebase-functions')
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();



//UNCOMMENT FUNCTION CALLS TO USE
const url = 'https://www.nytimes.com/live/2021/02/03/us/biden-administration';

//GET TITLE OG PAGE
 const scrapeNYT = async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  let title = await page.title();
  await page.waitForSelector('body');
  const body = await page.evaluate(() => document.body.innerHTML);
  const stringBody = body.toString()
  db.collection("articles").add({ title: title, body: stringBody});

  await browser.close();
}
scrapeNYT()
