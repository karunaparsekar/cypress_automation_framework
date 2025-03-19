import { defineConfig } from "cypress";
import fsExtra from 'fs-extra';
import { resolve } from 'path';
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import preprocessor from "@badeball/cypress-cucumber-preprocessor";

const { existsSync, readJson } = fsExtra;

function getConfigurationByFile(file) {
  const pathToConfigFile = resolve('cypress/config', `${file}.json`);

  if (!existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  return readJson(pathToConfigFile);
}

export default defineConfig({
  projectId: 'mevvq9',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    configFile: "reporter-config.json"
  },
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    setupNodeEvents: async (on, config) => { 
     
      //await preprocessor.addCucumberPreprocessorPlugin(on, config);
      await require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor", createEsbuildPlugin(config));

      require('cypress-mochawesome-reporter/plugin')(on);

      // Implement Node Event Listeners
      const file = config.env.configFile || '';

      return getConfigurationByFile(file);
    },
    baseUrl: 'https://automationteststore.com',
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
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
