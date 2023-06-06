import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://techcrunch.com/");

  const result = await page.evaluate(() =>
    Array.from(document.querySelectorAll("a")).map((v) => v.href)
  );

  console.log(result);

  // await page.goto("https://techcrunch.com/");

  // const dimensions = await page.evaluate(() => {
  //   const anchors = document.querySelectorAll("a.post-block__title__link");
  //   return [...anchors].map((a) => a.innerText);
  // });

  // console.log(dimensions);

  await browser.close();
})();
