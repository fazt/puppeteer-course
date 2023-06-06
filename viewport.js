import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 200,
    // defaultViewport: {
    //   width: 1080,
    //   height: 1920,
    // },
  });
  const page = await browser.newPage();

  // set a viewport for page
  await page.setViewport({
    width: 400,
    height: 650,
  });

  await page.goto("https://example.com");

  await browser.close();
})();