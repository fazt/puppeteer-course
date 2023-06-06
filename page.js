import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 400,
  });
  const page = await browser.newPage();
  await page.goto("https://example.com");
  const title = await page.title();
  console.log(title);

  await page.evaluate(() => {
    document.write("hello world");
  });

  await page.close();

  await browser.close();
})();
