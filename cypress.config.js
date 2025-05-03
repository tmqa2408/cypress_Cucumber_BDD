const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ecommerce-playground.lambdatest.io/index.php?route=common/home',
    specPattern: '**/*.feature',
    supportFile: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      allureWriter(on, config);
      return config;
    },
  },
  reporter: 'mocha-allure-reporter',
  reporterOptions: {
    resultsDir: 'allure-results'
  }
});

