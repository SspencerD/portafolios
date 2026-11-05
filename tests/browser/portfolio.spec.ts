import { test, expect } from '@playwright/test';
for (const width of [320, 390, 768, 1440]) {
  for (const locale of ['es', 'en']) {
    test(`${locale} layout and links at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      const errors: string[] = [];
      page.on('pageerror', e => errors.push(e.message));
      await page.goto(locale === 'es' ? '/' : '/en/');
      await expect(page.locator('html')).toHaveAttribute('lang', locale);
      await expect(page.locator('h1')).toHaveText('Santiago Spencer D.');
      await expect(page.locator('.timeline-card')).toHaveCount(8);
      await expect(page.locator('.skills')).toContainText('TanStack Query');
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      const boxes = await page.locator('.timeline-card').evaluateAll(cards => cards.map(c => {
        const r = c.getBoundingClientRect(); return { x: r.x, right: r.right, y: r.y, bottom: r.bottom };
      }));
      for (let i=0; i<boxes.length; i++) {
        expect(boxes[i].x).toBeGreaterThanOrEqual(0);
        expect(boxes[i].right).toBeLessThanOrEqual(width);
        if(i) expect(boxes[i].y).toBeGreaterThanOrEqual(boxes[i-1].bottom);
      }
      const images = await page.locator('img').evaluateAll(async imgs => {
        await Promise.all(imgs.map(img => { img.loading='eager'; return img.decode().catch(()=>{}); }));
        return imgs.every(img=>img.naturalWidth>0);
      });
      expect(images).toBe(true);
      expect(await page.locator('a[href="#"]').count()).toBe(0);
      await page.goto((locale === 'es' ? '/' : '/en/') + '#experience');
      await page.locator('[data-language-switch]').click();
      await expect(page).toHaveURL(new RegExp((locale === 'es' ? '/en/' : '/') + '#experience$'));
      await expect(page.locator('html')).toHaveAttribute('lang', locale === 'es' ? 'en' : 'es');
      await page.reload();
      await expect(page.locator('html')).toHaveAttribute('lang', locale === 'es' ? 'en' : 'es');
      expect(errors).toEqual([]);
    });
  }
}
test('native language links work without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage(); await page.goto('http://127.0.0.1:4321/');
  await page.locator('[data-language-switch]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await context.close();
});
