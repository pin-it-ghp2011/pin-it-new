const puppeteer = require('puppeteer');

//UNCOMMENT FUNCTION CALLS TO USE
const url = 'https://en.wikipedia.org/wiki/Groundhog_Day';

export const puppeteerArticle = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  let title = await page.title();
  await page.waitForSelector('body');
  const body = await page.evaluate(() => document.body.innerHTML);
  await browser.close();
  const articleObj = {
    title: title,
    url: url,
    body: `${body}`,
  };
  return articleObj;
};
