import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 200,
  });
  const page = await browser.newPage();
  await page.goto("https://example.com");

  // Wait for 5 seconds
  await new Promise((r) => setTimeout(r, 3000));

  await page.screenshot({ path: "example2.png" });
  //   await browser.waitForTarget(() => false);

  await browser.close();
})();
