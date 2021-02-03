const puppeteer = require('puppeteer');
const fs = require('fs');

//UNCOMMENT FUNCTION CALLS TO USE
const url = 'https://en.wikipedia.org/wiki/Groundhog_Day';
//GET TITLE OG PAGE
async function getTitle() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  let title = await page.title();
  await browser.close();
  //console.log(title); or do something with
}
//getTitle();

//GET CONTENT OF ENTIRE PAGE
const wholePage = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  const fullPage = await page.content();
  //console.log(fullPage); or do something with
  await browser.close();
};
//wholePage();

//GET HTML ONLY FOR PAGE
const getPage = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector('body');
  const bodyHTML = await page.evaluate(() => document.body.innerHTML);
  //console.log(bodyHTML); or send it somewhere
  await browser.close();
};

// getPage();

//GET SCREENSHOT- need path
const pageScreen = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const screenshot = await page.screenshot({
    path: 'screenshots/wikiground.png',
  });
  await browser.close();
};
// pageScreen();

//get summary tag
const getSummary = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  //pass in id of element you want and what to do/get from it
  //$eval=>gets single or first element that matches
  //$$eval=> gets all that match (in array? to map into list)
  const summary = await page.$eval('body', (element) => element.textContent);
  console.log(summary);
  await browser.close();
};
//getSummary();

//GET JUST WITHIN BODY TAGS
const bodyOnly = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.goto(url, { waitUntil: 'networkidle2' });
  const innerHTML = await page.evaluate(
    () => document.querySelector('body').innerHTML
  );

  fs.writeFileSync('./index.html', innerHTML);

  await browser.close();
  //console.log(innerHTML);
};
//bodyOnly();
