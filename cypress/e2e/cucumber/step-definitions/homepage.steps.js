/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import homepage from '../Pages/HomePage/HomePage.cy';

Given('I navigate to the HomePage Website', () => {
  homepage.enterURL();
});

When('I validate the title', () => {
  homepage.verifyPageTitle();
});

Then('I validate Tip Trending Categories are present', () => {
  homepage.verifyText();
});

And('I click Laptops section', () => {
  homepage.clickSubmitButton();
});

Then('I validate if this a Laptop page', () => {
  homepage.validateText();
});
