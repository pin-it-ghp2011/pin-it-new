import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import puppeteer from 'puppeteer';

const firebaseConfig = {
  apiKey: 'AIzaSyAab0HdR9spYlqI-0Z3R4QRa3UoYU_Wflc',
  authDomain: 'pin-it-8dd6e.firebaseapp.com',
  databaseURL: 'https://pin-it-8dd6e-default-rtdb.firebaseio.com',
  projectId: 'pin-it-8dd6e',
  storageBucket: 'pin-it-8dd6e.appspot.com',
  messagingSenderId: '1054852884997',
  appId: '1:1054852884997:web:a9126892339a36b5e58a6c',
};

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
