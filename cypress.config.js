const { defineConfig } = require("Cypress");
const fs = require('fs-extra');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);

  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: 'mevvq9',
  reporter: 'cypress-mochawesome-reporter',
  "reporterOptions": {
    "configFile": "reporter-config.json"
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      require('cypress-mochawesome-reporter/plugin')(on);

      // implement node event listeners here
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)
    },
    baseUrl: 'https://automationteststore.com',
    
    //excludeSpecPattern: "cypress/e2e/other/*.js",
    //baseUrl: "http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    videoUploadOnPasses: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },
    retries: {
      runMode: 0,
      openMode: 0
    },
    
  },
});
