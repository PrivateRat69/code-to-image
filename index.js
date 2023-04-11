import puppeteer from 'puppeteer';

async function generateImage(code, lines) {
  if (lines !== true) lines = false
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"]/*,  executablePath: './chrome-linux'*/});
  const page = await browser.newPage();
  await page.goto(`https://carbon.now.sh/?bg=rgba%28248%2C231%2C28%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=${lines}&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=${encodeURIComponent(code)}`);
  const element = await page.$('.container-bg');
  const buffer = await element.screenshot({ encoding: 'binary' });
  await browser.close();
  return buffer;
}

module.exports = generateImage