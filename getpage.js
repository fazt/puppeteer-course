import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://example.com");

  const html = await page.content();
  console.log(html);

  await browser.close();
})();
