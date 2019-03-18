const chromedriverPath = require('chromedriver').path
module.exports = {
  "src_folders" : ["test/e2e/specs"],

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