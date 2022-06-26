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

test("it should have a link to linkedin", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const link = page.locator("a.linked-in");

  await expect(link).toBeVisible();

  const href = await link.getAttribute("href");

  await expect(href).toMatch("https://linkedin.com/in/ryleung");
});

test("it should have a link to github", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const link = page.locator("a.github");

  await expect(link).toBeVisible();

  const href = await link.getAttribute("href");

  await expect(href).toMatch("https://github.com/minocys");
});

test("it should have a mailto link", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const link = page.locator("a.mail-to");

  await expect(link).toBeVisible();

  const href = await link.getAttribute("href");

  await expect(href).toMatch("mailto: contact@ryan-leung.com");
});
