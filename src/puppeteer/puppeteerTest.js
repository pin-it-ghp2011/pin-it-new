const puppeteer = require('puppeteer');

//UNCOMMENT FUNCTION CALLS TO USE
const url = 'https://en.wikipedia.org/wiki/Groundhog_Day';

//GET TITLE OG PAGE
export async function newArticle() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  let title = await page.title();
  await page.waitForSelector('body');
  const body = await page.evaluate(() => document.body.innerHTML);
  await browser.close();
}

//different commands
//let title = await page.title();
//   const fullPage = await page.content();
// const bodyText = await page.evaluate(
//   () => document.querySelector('body').innerHTML
// );
