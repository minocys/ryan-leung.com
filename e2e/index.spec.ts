import { test, expect } from "@playwright/test";

test("it should have a home page", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const title = page.locator("title");
  await expect(title).toContainText("Ryan Leung");

  const meta = page.locator('meta[name="description"]');
  await expect(meta).toHaveAttribute("content", "ryan-leung.com");
});

test("it should display my current position", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const heading = page.locator("h1");

  await expect(heading).toHaveText("Ryan Leung");

  const subheading = page.locator("h2");

  await expect(subheading).toHaveText("Technical Lead at Crypto.com");
});
