/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import loginPage from "../Pages/LoginPage/LoginPage.cy";

Given("I navigate to the Website", () => {
    loginPage.enterURL();
});

When("I entered valid credential", (dataTable) => {
    const credentials = dataTable.hashes()[0];
    loginPage.enterEmail(credentials.email);
    loginPage.enterPassword(credentials.validpassword);
});

And("User click on sign in button", () => {
    loginPage.clickSubmitButton();
});

Then("Validate the title after login", () => {
    loginPage.verifyPageTitle();
}); 