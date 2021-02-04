import React, { useEffect } from 'react';
import puppeteer from 'puppeteer';

//just sample url for this to run-
// let title;
// let body;

// async function puppeteerArticle(url) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url, { waitUntil: 'networkidle2' });
//   title = await page.title();
//   await page.waitForSelector('body');
//   body = await page.evaluate(() => document.body.innerHTML);
//   await browser.close();
//   // const articleObj = {
//   //   title: JSON.stringify(title),
//   //   url: JSON.stringify(url),
//   //   body: JSON.stringify(body),
//   // };

//   // return articleObj;
// }

const SingleArticle = () => {
  const url = 'https://en.wikipedia.org/wiki/Groundhog_Day';

  async function puppeteerArticle() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    let title = await page.title();
    await page.waitForSelector('body');
    let body = await page.evaluate(() => document.body.innerHTML);
    await browser.close();
    return [title, body];
  }
  useEffect(() => {
    let [title, body] = puppeteerArticle(url);
    console.log('single article', title, body);
  }, []);

  //const { title, body } = article;
  // const container = document.getElementById('container');
  // container.innerHTML = body;
  // console.log(title);
  return (
    <div>
      <h1>hello</h1>
      {/* <div id="container">{body}</div> */}
    </div>
  );
};
export default SingleArticle;
