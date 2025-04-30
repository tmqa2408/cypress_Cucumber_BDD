const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  projectId: 'vgsrrw',
    e2e: {
      specPattern: "**/*.feature",
      setupNodeEvents(on, config) {
        on("file:preprocessor", cucumber());
      },
      baseUrl:'https://ecommerce-playground.lambdatest.io/index.php?route=common/home',
      reporter: 'mochawesome',
      reporterOptions: {
      reportDir: 'cypress/results/mocha',  
      overwrite: false,
      html: false,
      json: true,
    },
  },
  

  // "env":{
  //  "URL" : "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
  // }
});


