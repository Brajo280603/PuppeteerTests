function puppeteerapi(URLans){

  const puppeteer = require('puppeteer');

  async function getVisual() {
    try{
      const URL = URLans;
      // const browser = await puppeteer.launch(); //launch headless by default

      const browser = await puppeteer.launch({headless:false});//this will launch it with a gui


        

      const page = await browser.newPage()
      await page.setViewport({ width: 1366, height: 768});
      await page.goto(URL)

      // await page.screenshot({path: 'sclocal.png'})
      
      // await page.pdf({path:'pdflocal.pdf'})

      // Query for an element handle.
      const element = await page.waitForSelector('div > .getHere');

      // Do something with element...
      await element.click(); // Just an example.

      // Dispose of handle
      await element.dispose();


      // await browser.close()
    } catch(error) {
      console.error(error)
    }
  }


  getVisual();

}

puppeteerapi("http://localhost:1234/")