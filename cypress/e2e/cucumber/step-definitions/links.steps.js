/// <reference types="cypress" />
import { Given, Then } from "cypress-cucumber-preprocessor/steps"

Given("I send a GET request to {string}", (path) => {
    cy.request({
        method: 'GET',
        url: path,
        failOnStatusCode: false
    }).as('response');
});

Then("the response status code should be {int}", (statusCode) => {
    cy.get('@response').its('status').should('eq', statusCode);
}); 