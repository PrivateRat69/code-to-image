const puppeteer = require("puppeteer");

function rgbStringToArray(rgbaString) {
  const rgbArray = rgbaString.replace(/[^\d,.]/g, '').split(',');
  return rgbArray;
}

async function generateImage(code, lines, rgba) {
  if (lines.toLowerCase().startsWith("true")) {lines == true} else lines == false;
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"]/*,  executablePath: './chrome-linux'*/});
  const page = await browser.newPage();
  await page.goto(`https://carbon.now.sh/?bg=rgba%28${rgbStringToArray(rgba)[0]}%2C${rgbStringToArray(rgba)[1]}%2C${rgbStringToArray(rgba)[2]}%2C1%29&t=duotone-dark&wt=sharp&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=${lines}&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=${encodeURIComponent(code)}`);
  const element = await page.$('.container-bg');
  const buffer = await element.screenshot({ encoding: 'binary' });
  await browser.close();
  return buffer;
}

module.exports = generateImage