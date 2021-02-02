# Code Review I


## Project Overview

### Collaboration

* Love the Semantic Commits from Linh!
Semantic Commit, 3 parts
* Type of commit (feature, docs, debug, etc)
* Area of commit coverage (models, Redux, docs, API etc)
* Present-tense description of what commit does

* Make sure to include a Readme with project description, authorship, deployed link, and instructions for setting up locally.


* Tickets seem out of sync with project goals, priorities
* Can share knowledge in a running doc, but beware of analysis paralysis
* Please Pair program on the PoC and keep relevant tickets on the board, lots of horizontal slicing


## Proof of Concept

* Web Scraping w/ Puppeteer
* Following tutorial, lots of page interaction
* Other libraries to consider JSDOM

Proof of Concept Goals
* Scrape hardcoded page (wikipedia, NYTimes)
* Scrape HTML + CSS
* Render somewhere else (offline)
* Demo of this Thursday 10:30 AM
* This will be the groundwork/ technical infrastructure for multiple MVPs (chrome plugin, mobile app, browser library, etc)

### Puppetteer
* Lots of IIFEs, is this better than naming expressions?


```javascript
//Instead of
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


// Do this
const scrapeNYT = async () => {
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
}

scrapeNYT()

```
* Glad to see we left promises out of our for loop
* Use `Promise.all([...asyncFns])` to get an array of resolved functions
```javascript

const promises = tags.map(tag => await findByTagName(tag))
let tagResults = await Promise.all([...promises])

```
* Service Worker will be lower priority for browser-based app


## MVP Roadmap

* PouchDB, firebase for offline access for browser 
    * Can be used to cache the articles

1) Get to Proof of Concept
    * Scrape, and render hardcoded site
2) User chooses which site to scrape
3) Via Chrome Plugin or Other means, users "Pin" site
4) Users can view saved articles on browser dashboard
5) Dashboard is offline comptable (browser or mobile


* Suggested Work Norms
    * Daily Stand-up
    * Pair Program on all of these objectives whenever possible
    * Write Help Tickets when needed
    * Focus on writing tickets relevant to POC => MVP


## Proof of Concept Architecture


```javascript

const isUser = (req, res, next) => req.user.id ? next() : res.send("NOOO")

//Express routes receives sitename
app.post("pinit/api?sitename=www.penguins.com", isUser,async (req, res, next) => {
    // Scrape w/ Phantom Browser
    let scraped = await puppeteer.scrape(req.query.sitebane)
    // Set in Firebase
    await firebase.set(scraped)
})

app.get("savedArticles", isUser, (req, res, next) => {
    let articles = await firebase.get(articles)
    res.json({articles})
})


```



```html
// Rendering the page
<style id="style">
</style>
<body id="container">
</body>

```
```javascript

let scrapedTxt = "<h1>Hello</h1><p>Mysite</p>"
let scrapedCSS = "p{color: fuschia;}"
let body = document.getElementById("container")
let css = document.getElementById("style")
body.innerHTML = scrapedTxt
css.innerHTML = scrapedCSS

```