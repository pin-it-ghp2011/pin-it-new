import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import puppeteer from 'puppeteer';

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const url = window.location.href();

const saveButton = document.getElementsById('save-article');

const puppeteerArticle = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  let title = await await page.title();
  // console.log(title)
  await page.waitForSelector('body');
  const body = await page.evaluate(() => document.body.innerHTML);
  // console.log(body)
  await browser.close();
  const article = {
    title: title,
    url: url,
    body: body,
  };

  return article;
};
const saveIt = async function () {
  const newArticle = puppeteerArticle(url);
  await db.collection('articles').add(newArticle);
};

saveButton.addEventListener('click', saveIt());
