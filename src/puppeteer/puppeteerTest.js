const puppeteer = require('puppeteer');

//just sample url for this to run-
const url = 'https://en.wikipedia.org/wiki/Groundhog_Day';

export const puppeteerArticle = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  let title = await (await page.title()).toString();
  await page.waitForSelector('body');
  const body = await (
    await page.evaluate(() => document.body.innerHTML)
  ).toString();
  await browser.close();
  const articleObj = {
    title: title,
    url: url,
    body: `${body}`,
  };
  return articleObj;
};
