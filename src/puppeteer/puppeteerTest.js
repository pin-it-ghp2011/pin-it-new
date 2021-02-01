
//Sample puppeteer functions

const puppeteer = require('puppeteer');
//Gets the title
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    'https://www.nytimes.com/2021/01/30/us/politics/trump-right-wing-domestic-terrorism.html?action=click&module=Spotlight&pgtype=Homepage'
  );
  let text = await page.title();
  await browser.close();
  console.log(text);
})();

//get article summary
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    'https://www.nytimes.com/2021/01/30/us/politics/trump-right-wing-domestic-terrorism.html?action=click&module=Spotlight&pgtype=Homepage'
  );
  //pass in id of element you want and what to do/get from it
  //$eval=>gets single or first element that matches
  //$$eval=> gets all that match (in array? to map into list)
  const summary = await page.$eval(
    '#article-summary',
    (element) => element.textContent
  );
  console.log(summary);
  await browser.close();
})();

//get a screenshot
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    'https://www.nytimes.com/2021/01/30/us/politics/trump-right-wing-domestic-terrorism.html?action=click&module=Spotlight&pgtype=Homepage'
  );
  await page.screenshot({ path: '../public/page.png' });

  await browser.close();
})();

//getting  all p tags
// (async () => {
// 	const browser = await puppeteer.launch();
// 	const page = await browser.newPage();
// 	await page.goto(
// 		'https://www.nytimes.com/2021/01/30/us/politics/trump-right-wing-domestic-terrorism.html?action=click&module=Spotlight&pgtype=Homepage'
// 	);
// 	//pass in id of element you want and what to do/get from it

// 	//$eval=>gets single or first element that matches
// 	//$$eval=> gets all that match (in array? to map into list)
// 	const text = await page.$$('p');
// 	for (let i = 0; i < text.length; ++i) {
// 		const elem = text[i];
// 		const allText = await page.evaluate((elem) => elem.textContent, elem);
// 		console.log(allText);
// 	}
