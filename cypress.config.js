const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return 
    },
    specPattern:"cypress/integration/test_api/*.js"
//specPattern:"cypress/integration/test_api/*.js"       //for all files to be in the spec
  },
});
