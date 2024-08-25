import puppeteer from "puppeteer";

async function start() {
  const url = "https://www.investing.com/crypto/bitcoin";
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(url);
  setInterval(async () => {
    var element = await page.waitForSelector(
      "xpath/" +
        "/html/body/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]",
      { timeout: false }
    );
    var price = await page.evaluate((element) => element.textContent, element);
    console.log(price);
  }, 5000);
}
start();
