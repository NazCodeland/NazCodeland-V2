import { test } from '@playwright/test';

test('test browser', async ({ page }) => {
	// point this to wherever you want
	await page.goto('http://localhost:4173/');

	// keep browser open
	await page.pause();
});
