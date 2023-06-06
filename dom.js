import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.setContent("<h1>DOM</h1><p>DOM is cool</p>");

  await page.pdf({ path: "dom.pdf", format: "A4" });

  await browser.close();
})();
