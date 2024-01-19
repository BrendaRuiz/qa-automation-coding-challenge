const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  e2e: {
    specPattern: 'cypress/e2e/*.cy.js',
    baseUrl: "https://brendaruiz.github.io/qa-automation-coding-challenge/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
