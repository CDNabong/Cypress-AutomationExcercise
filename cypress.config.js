module.exports = {
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://www.automationexercise.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      apiUrl: 'https://automationexercise.com/api/'
    },
    testIsolation: false,
  },
  video: true,
  screenshotOnRunFailure: true,
  failOnStatusCode: false,
};



// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   e2e: {
//     chromeWebSecurity: false,
//     baseUrl: 'https://www.automationexercise.com',
//     setupNodeEvents(on, config) {
//       on('test:after:run', (attributes, results) => {
//         // If test failed, exit with error code
//         if (attributes.state === 'failed') {
//           throw new Error('Test failed - stopping execution')
//         }
//       })
//     },
//     // Adding bail option to stop on first failure
//     bail: true
//   },
//   testIsolation: false,
//   // You might also want these additional configs
//   watchForFileChanges: false,
//   defaultCommandTimeout: 10000,
//   retries: {
//     runMode: 0,
//     openMode: 0
//   },
//   video: true,
//   screenshotOnRunFailure: true,
//   failOnStatusCode: false,
// })