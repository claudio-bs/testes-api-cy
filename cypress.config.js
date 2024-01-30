const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://localhost:3000/',
    projectId: 'ghddgz',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'mochawesome-report',
      overwrite: false,
      reportFilename: "index.html",
      html: false,
      json: true,
    },
  },
});


