const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  e2e: {
    specPattern: 'cypress/e2e/*.cy.js',
    baseUrl: "http://localhost:3000",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
