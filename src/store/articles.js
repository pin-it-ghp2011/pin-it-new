import puppeteer from 'puppeteer';
import { db } from '../../server/index';

const puppeteerArticle = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  let title = await page.title();
  await page.waitForSelector('body');
  const rawBody = await page.evaluate(() => document.body.innerHTML);
  const body = rawBody.toString();
  await browser.close();
  const articleObj = {
    title: title,
    url: url,
    body: body,
  };
  return articleObj;
};

const ADD_ARTICLE = 'ADD_ARTICLE';

export const addArticle = (article) => ({
  type: ADD_ARTICLE,
  article,
});

export const newArticle = (url) => {
  return async (dispatch) => {
    try {
      const data = puppeteerArticle(url); //should output object representing article
      //DATABASE CALL IN HERE/ OR WILL IT BE AXIOS TO API??

      dispatch(addArticle(data));
    } catch (err) {
      console.log('Something is wrong in the new article thunk: ', err);
    }
  };
};
export default function articlesReducer(state = [], action) {
  //console.log('project reducer', action.projectId);
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.article];
    default:
      return state;
  }
}
