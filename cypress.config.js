const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'vgsrrw',
  reporter: 'mocha-allure-reporter',
  reporterOptions: {
    resultsDir: 'allure-results',
  },
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: 'https://ecommerce-playground.lambdatest.io/index.php?route=common/home',
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin')(on, config);
      allureWriter(on, config);
      on("file:preprocessor", cucumber());
      return config;
    },
  },
});
