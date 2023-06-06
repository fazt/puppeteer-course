import puppeteer from "puppeteer";
import fs from 'fs/promises'

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto("https://www.thegithubshop.com/collectibles");

  //   const result = await page.evaluate(() =>
  //     Array.from(document.querySelectorAll(".item.product.product-item")).map(
  //       (e) => ({
  //         name: e.querySelector(".product-item-link").innerText,
  //         price: e.querySelector(".price").innerText,
  //         image: e.querySelector(".product-image-photo").src,
  //       })
  //     )
  //   );

  const result = await page.$$eval(".item.product.product-item", (elements) =>
    elements.map((e) => ({
      name: e.querySelector(".product-item-link").innerText,
      price: e.querySelector(".price").innerText,
      image: e.querySelector(".product-image-photo").src,
    }))
  );

  console.log(result);
  await fs.writeFile("githubshop.json", JSON.stringify(result, null, 2));

  await browser.close();
})();
