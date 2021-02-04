const puppeteer = require('puppeteer');
//const fs = require('fs');

//just sample url for this to run-
const url = 'https://en.wikipedia.org/wiki/Groundhog_Day';

export default async function puppeteerArticle() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  let title = await page.title();
  await page.waitForSelector('body');
  const body = await page.evaluate(() => document.body.innerHTML);
  await browser.close();
  const articleObj = {
    title: JSON.stringify(title),
    url: JSON.stringify(url),
    body: JSON.stringify(body),
  };

  return articleObj;
  //fs.writeFileSync('./public/singleArticle.html', body);
}
//puppeteerArticle();
