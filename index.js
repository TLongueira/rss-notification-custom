let Parser = require('rss-parser');
let parser = new Parser();

(async () => {
  let feed = await parser.parseURL('https://ssl.smn.gob.ar/feeds/CAP/avisocortoplazo/rss_acpCAP.xml');

  console.log(feed.title);

  feed.items.forEach((item) => {
    console.log(item.title);
  });
})();