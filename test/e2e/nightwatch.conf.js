const chromedriverPath = require('chromedriver').path
module.exports = {
  "src_folders" : ["test/e2e/specs"],
  // 'test_runner': {
  //   'type': 'mocha',
  //   'options': {
  //     'ui': 'bdd',
  //     'reporter': 'mochawesome',
  //     'reporterOptions': {
  //       'reportDir': 'test/e2e/reports',
  //       'reportFilename': 'e2e-result',
  //       'quiet': true,
  //       'json': false
  //     }
  //   }
  // },

  "webdriver" : {
    "start_process": true,
    "server_path": chromedriverPath,
    "port": 9515,
    "log_path" : "test/e2e/reports"
  },

  "test_settings" : {
    "default" : {
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "args": [
            "--headlessss"
          ]
        }
      }
    }
  }
}