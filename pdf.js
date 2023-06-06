import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto("https://example.com");
  await page.pdf({ path: "example.pdf", format: "A4", printBackground: true });
  await browser.close();
})();
