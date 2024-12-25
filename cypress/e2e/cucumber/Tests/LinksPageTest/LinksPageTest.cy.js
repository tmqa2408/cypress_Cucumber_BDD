/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
// import linkspage from "../../Pages/LinksPage/LinksPage.cy";
// import onurl  from "cypress/support/onurl.js";

const BASE_URL = "https://about.google";

Given("I send a GET request to {string}", (path) => {
  cy.request(`${BASE_URL}${path}`).as("response");
});

Then("the response status code should be {int}", (statusCode) => {
  cy.get("@response").then((response) => {
    expect(response.status).to.eq(statusCode);
  });
});