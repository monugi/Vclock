const fs = require('fs');
const path = require('path');

const cities = require('./data/cities.json');
const timers = require('./data/timers.json');

const today = new Date().toISOString().slice(0, 10);

const urls = [
  { loc: 'https://vclock.app/', lastmod: today },
  { loc: 'https://vclock.app/alarm', lastmod: today },
  { loc: 'https://vclock.app/timer', lastmod: today },
  { loc: 'https://vclock.app/stopwatch', lastmod: today },
  { loc: 'https://vclock.app/time', lastmod: today },
  { loc: 'https://vclock.app/test-timer', lastmod: today },
];

// Add all city pages
cities.forEach(city => {
  let loc;
  if (city.name.includes(',')) {
    const [cityName, region] = city.name.split(',').map(s => s.trim());
    loc = `https://vclock.app/time/${cityName.toLowerCase().replace(/\s+/g, '-')}/${region.toLowerCase().replace(/\s+/g, '-')}`;
  } else {
    loc = `https://vclock.app/time/${city.name.toLowerCase().replace(/\s+/g, '-')}`;
  }
  urls.push({ loc, lastmod: today });
});

// Add all timer preset pages
function secondsToSlug(seconds) {
  if (seconds % 3600 === 0) {
    const hours = seconds / 3600;
    return `${hours}-${hours === 1 ? 'hour' : 'hours'}`;
  }
  if (seconds % 60 === 0) {
    const minutes = seconds / 60;
    return `${minutes}-${minutes === 1 ? 'minute' : 'minutes'}`;
  }
  return `${seconds}-${seconds === 1 ? 'second' : 'seconds'}`;
}
timers.forEach(timer => {
  const slug = secondsToSlug(timer.value);
  urls.push({ loc: `https://vclock.app/set-timer-for-${slug}`, lastmod: today });
});

// Generate XML
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(u => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`),
  '</urlset>'
].join('\n');

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml);

console.log('Sitemap generated!'); 