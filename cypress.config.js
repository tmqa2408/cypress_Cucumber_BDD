const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  projectId: 'vgsrrw',
  e2e: {
     specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
    },
    baseUrl:'https://ecommerce-playground.lambdatest.io/index.php?route=common/home'
  
  },
  

  // "env":{
  //  "URL" : "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
  // }
});


const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
})