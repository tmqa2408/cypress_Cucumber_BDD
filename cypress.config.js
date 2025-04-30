const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: 'vgsrrw',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: 'https://ecommerce-playground.lambdatest.io/index.php?route=common/home',
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
