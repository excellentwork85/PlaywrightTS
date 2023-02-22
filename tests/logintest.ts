import test, { chromium } from "@playwright/test";


test("Login test demo", async()=>{
    const browser = await chromium.launch({
        headless:false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@class='icon-left both nav-link dropdown-toggle']//*[contains(text(), 'My account')]");
    await page.click("text=Login");
    await page.fill("id=input-email", "v.seena@gmail.com");
    await page.click("//input[@value='Login']");
    await page.getByText("//div[@class='alert alert-danger alert-dismissible']");

    await page.waitForTimeout(15000)


})