const puppeteer = require('puppeteer')
const expect = require("chai").expect

describe('My first puppeteer test',()=>{
    xit('should see what is typed in the input field', async ()=>{
      const browser = await puppeteer.launch({
        headless: false, //if set true, run test fastr , don't see the web launch
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto("https://www.amazon.com/")
      await page.type("#twotabsearchtextbox", "cooker", {delay: 300}) //1st argument is the selector, 2nd is value, 3rd arg-> slow motion -> slow typing speed -> dev to test
      await page.waitFor(2000) // got to the browser for 5secs
      await browser.close()
    })
    xit('should handle button', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto("https://www.amazon.com/")
      const message = "electric cooker"
      await page.type("#twotabsearchtextbox", message,{delay: 200})
      await page.click("#nav-search-submit-button",{clickCount: 1})
      await page.waitFor(2000)
      await browser.close()
    })

    xit('should handles select/dropdown', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto("https://devexpress.github.io/testcafe/example/")
      await page.select('#preferred-interface','JavaScript API')
      await page.waitFor(5000)
      await browser.close()
    })
    xit('should handles input, click, select/dropdown and submit', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto("https://devexpress.github.io/testcafe/example/")
      await page.type("#developer-name","linh Vu",{delay: 500})
      await page.click("#tried-test-cafe")
      await page.select('#preferred-interface','JavaScript API')
      const message ="I am writing something nice in here"
      await page.type("#comments", message, {delay: 150})
      await page.click("#submit-button")
      await page.waitForSelector('.result-content')
      await page.waitFor(5000)
      await browser.close()
    })

    xit('should extract title, url of a website ', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto("https://www.nytimes.com/")
      const title = await page.title()
      const url = await page.url()
      console.log("TITLE: " + title)
      console.log("url " + url)
      await browser.close()
    })
    xit('should print out extracted title, url of a website/article ', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto("https://www.nytimes.com/2021/01/30/us/politics/trump-right-wing-domestic-terrorism.html")
      const title = await page.title()
      const url = await page.url()
      const textContent = await page.$eval("#link-754258c0", element => element.textContent)
      console.log("text content: "+textContent)
      await browser.close()
    })

    xit('should able to count number of p tag in the page ', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto("https://www.nytimes.com/2021/01/30/us/politics/trump-right-wing-domestic-terrorism.html")
      const countPtag = await page.$$eval('p', element => element.length)
      //console.log(countPtag)
      expect(countPtag).to.equal(77)
      await browser.close()
    })


    xit('should able to get title, url,number of p tag in the page ', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      // await page.setDefaultTimeout(10000) //change defaut timeout from 45secs to 10secs
      // await page.setDefaultNavigationTimeout(20000) //change default navigation Timeout
      await page.goto("https://www.nytimes.com/2021/01/30/us/politics/trump-right-wing-domestic-terrorism.html")
      const title = await page.title()
      const url = await page.url()
      const textContent = await page.$eval("#link-754258c0", element => element.textContent)
      const countPtag = await page.$$eval('p', element => element.length)

      expect(title).to.include("How Trump’s Focus on Antifa Distracted Attention From the Far-Right Threat")
      expect(textContent).to.be.a('string','How Trump’s Focus on Antifa Distracted Attention From the Far-Right Threat')
      expect(url).to.include("nytimes.com/2021/01/30/us/politics/trump-right-wing-domestic-terrorism")
      expect(countPtag).to.equal(77)
      await browser.close()
    })

    xit('should able to handle keyboard pressed after typing in input field', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto("https://www.amazon.com/")
      await page.waitForSelector("#twotabsearchtextbox")
      await page.type("#twotabsearchtextbox","kitkat")
      await page.keyboard.press("Enter",{delay:10})
      await page.waitFor(5000)
      await browser.close()
    })

    xit('should able to handle keyboard pressed after typing in input field', async ()=>{
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: false
      })
      const page = await browser.newPage()
      await page.goto("https://www.amazon.com/")
      await page.waitForSelector("#twotabsearchtextbox")
      await page.type("#twotabsearchtextbox","kitkat")
      await page.keyboard.press("Enter",{delay:10})
      await page.waitFor(5000)
      await browser.close()
    })
})
