import { defineConfig } from "Cypress";
import fsExtra from 'fs-extra';
const { existsSync, readJson } = fsExtra;
import { resolve } from 'path';
import cucumber from 'cypress-cucumber-preprocessor';

function getConfigurationByFile(file) {
  const pathToConfigFile = resolve('cypress\\config', `${file}.json`);

  if(!existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  return readJson(pathToConfigFile);
}

export default defineConfig({
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
