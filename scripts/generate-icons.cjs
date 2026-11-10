const fs = require('fs');
const path = require('path');
const { chromium } = require('/usr/local/share/bun-global/node_modules/playwright-core');

const svgContent = fs.readFileSync(path.join(__dirname, '../public/favicon.svg'), 'utf8');

async function generate() {
  console.log('Launching browser...');
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/ms-playwright/chrome-headless-shell-linux64/chrome-headless-shell',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();

  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'icon-192.png', size: 192 },
    { name: 'icon-512.png', size: 512 },
  ];

  for (const item of sizes) {
    await page.setViewportSize({ width: item.size, height: item.size });
    await page.setContent(`<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; overflow: hidden; background: transparent; }
  svg { width: 100%; height: 100%; display: block; }
</style>
</head>
<body>
${svgContent}
</body>
</html>`);

    const dest = path.join(__dirname, '../public', item.name);
    await page.screenshot({ path: dest, omitBackground: true });
    console.log(`Generated: ${item.name} (${fs.statSync(dest).size} bytes)`);
  }

  // Maskable icon: 512x512 with safe-zone margin (solid background matching theme)
  await page.setViewportSize({ width: 512, height: 512 });
  await page.setContent(`<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { 
    width: 100%; 
    height: 100%; 
    overflow: hidden; 
    background: linear-gradient(135deg, #4F46E5 0%, #635BFF 45%, #9333EA 75%, #E11D48 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .inner { width: 80%; height: 80%; display: flex; align-items: center; justify-content: center; }
  svg { width: 100%; height: 100%; display: block; }
</style>
</head>
<body>
  <div class="inner">
    ${svgContent}
  </div>
</body>
</html>`);

  const maskableDest = path.join(__dirname, '../public/maskable-icon-512.png');
  await page.screenshot({ path: maskableDest, omitBackground: false });
  console.log(`Generated: maskable-icon-512.png (${fs.statSync(maskableDest).size} bytes)`);

  // Build favicon.ico from 16, 32, and 48 PNGs
  const p16 = fs.readFileSync(path.join(__dirname, '../public/favicon-16x16.png'));
  const p32 = fs.readFileSync(path.join(__dirname, '../public/favicon-32x32.png'));
  const p48 = fs.readFileSync(path.join(__dirname, '../public/favicon-48x48.png'));

  const images = [
    { width: 16, height: 16, buffer: p16 },
    { width: 32, height: 32, buffer: p32 },
    { width: 48, height: 48, buffer: p48 },
  ];

  // ICO header: 6 bytes
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon type
  header.writeUInt16LE(images.length, 4); // count

  let offset = 6 + (images.length * 16);
  const entries = [];
  const datas = [];

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width, 0);
    entry.writeUInt8(img.height, 1);
    entry.writeUInt8(0, 2); // 0 = no palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(img.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset

    entries.push(entry);
    datas.push(img.buffer);
    offset += img.buffer.length;
  }

  const icoBuffer = Buffer.concat([header, ...entries, ...datas]);
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);
  console.log(`Generated: favicon.ico (${icoBuffer.length} bytes)`);

  await browser.close();
  console.log('All icons generated successfully!');
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
