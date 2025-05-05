const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ecommerce-playground.lambdatest.io/index.php?route=common/home',
    specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      allureWriter(on, config); // обязательно для Allure
      return config;
    },
    supportFile: false,
    env: {
      allure: true // включает генерацию Allure-результатов
    },
    experimentalRunAllSpecs: true // (опционально) если хочешь запускать все feature-файлы подряд
  }
});
