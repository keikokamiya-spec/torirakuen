import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '../torirakuen-html';
const PAGES = [
  { path: '#/', file: 'index.html', title: '鳥楽苑 | 船橋 本格備長炭焼鳥居酒屋' },
  { path: '#/courses', file: 'courses.html', title: 'コース・メニュー | 鳥楽苑' },
  { path: '#/seats', file: 'seats.html', title: 'お席・貸切 | 鳥楽苑' },
  { path: '#/gallery', file: 'gallery.html', title: 'ギャラリー | 鳥楽苑' },
  { path: '#/access', file: 'access.html', title: 'アクセス | 鳥楽苑' }
];

const HTML_TEMPLATE = (title, content) => `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="鳥楽苑（とりらくえん）- 船橋駅北口徒歩1分半。備長炭で焼く本格焼鳥と豊富なドリンク。最大50名様の貸切・宴会にも対応。食べ放題・飲み放題コースあり。" />
    <meta name="keywords" content="鳥楽苑,とりらくえん,船橋,焼鳥,備長炭,居酒屋,貸切,宴会,食べ放題,飲み放題" />
    <title>${title}</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    ${content}
    <script src="js/main.js"></script>
  </body>
</html>`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const p of PAGES) {
    console.log(`Rendering ${p.path}...`);
    await page.goto(`http://localhost:5174/torirakuen/${p.path}`, { waitUntil: 'networkidle' });
    
    // Give it a small delay for any animations/lazy images
    await page.waitForTimeout(500);

    const rootHtml = await page.evaluate(() => {
      return document.getElementById('root').innerHTML;
    });

    let cleanedHtml = rootHtml
      // Replace React HashRouter links with standard HTML links
      .replace(/href="#\/courses"/g, 'href="courses.html"')
      .replace(/href="#\/seats"/g, 'href="seats.html"')
      .replace(/href="#\/gallery"/g, 'href="gallery.html"')
      .replace(/href="#\/access"/g, 'href="access.html"')
      .replace(/href="#\/"/g, 'href="index.html"')
      // Fix image paths
      .replace(/src="\/torirakuen\/images\//g, 'src="images/')
      .replace(/src="\.\/images\//g, 'src="images/');

    const finalHtml = HTML_TEMPLATE(p.title, cleanedHtml);
    fs.writeFileSync(path.join(OUT_DIR, p.file), finalHtml, 'utf8');
    console.log(`Saved ${p.file}`);
  }

  await browser.close();
  console.log('Done!');
})();
