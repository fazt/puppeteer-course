import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://fazt.dev");

  const result = await page.evaluate(() =>
    Array.from(document.querySelectorAll("a")).map((v) => v.href)
  );

  console.log(result);

  await browser.close();
})();
