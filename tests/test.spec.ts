// import { test, expect } from '../playwright/fixtures.ts';
import { expect, test } from "@playwright/test";

test.describe("Change language", () => {
  test("has title", async ({ page }) => {
    // step: Testing steps
    await page.goto("https://practice.expandtesting.com/secure");

    // step: Testing another step
    await expect(page).toHaveTitle(/Secure Page/);
  });
});

test("Test2", async ({ page }) => {
  // step: Testing steps
  await page.goto("https://practice.expandtesting.com/secure");
  // step: Testing another step
  await expect(page.getByText("Hi, practice!")).toBeVisible();
});

test("Test3", async ({ page }) => {
  // step: Testing steps
  await page.goto("https://practice.expandtesting.com/secure");
  // step: Testing another step
  await expect(page.getByText("Hi, practice!")).toBeVisible();
});
