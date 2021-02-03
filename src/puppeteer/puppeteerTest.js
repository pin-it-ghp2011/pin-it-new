const puppeteer = require('puppeteer');

//UNCOMMENT FUNCTION CALLS TO USE
const url = 'https://en.wikipedia.org/wiki/Groundhog_Day';
//GET TITLE OG PAGE
async function getTitle() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org/wiki/Groundhog_Day');
  let title = await page.title();
  await browser.close();
  console.log(title);
}
//getTitle();

//GET CONTENT OF ENTIRE PAGE
const wholePage = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  const fullPage = await page.content();
  console.log(fullPage);
  await browser.close();
};
//wholePage();

//GET HTML ONLY FOR PAGE
const getPage = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org/wiki/Groundhog_Day');
  await page.waitForSelector('body');
  const bodyHTML = await page.evaluate(() => document.body.innerHTML);
  console.log(bodyHTML);
  await browser.close();
};

// getPage();

//GET SCREENSHOT
const pageScreen = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org/wiki/Groundhog_Day');
  const screenshot = await page.screenshot({
    path: 'screenshots/wikiground.png',
  });
  await browser.close();
};
// pageScreen();
