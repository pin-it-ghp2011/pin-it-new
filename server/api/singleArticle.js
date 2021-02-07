const router = require('express').Router();
const puppeteer = require('puppeteer');

//eventually send the url from the front

// const url =
//   'https://www.nytimes.com/2021/02/03/business/mckinsey-opioids-settlement.html';
//const url = 'https://en.wikipedia.org/wiki/Fullstack_Academy';
const url = 'https://en.wikipedia.org/wiki/Groundhog_Day';
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
  const articleObj = {
    title: title,
    url: url,
    body: body,
  };

  return articleObj;
};

router.get('/', async (req, res, next) => {
  console.log(`we in here!!`);
  let article = await puppeteerArticle();

  res.send(article);
});

module.exports = router;
