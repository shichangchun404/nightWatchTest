const testUrl = 'https://www.baidu.com/'
module.exports = {
  'test for baidu' : function (browser) {
    browser
      .url(testUrl)
      .waitForElementVisible('body', 3000)
      .setValue('input[id=kw]', 'nightwatch')
      .waitForElementVisible('input[type=submit]', 1000)
      .click('input[type=submit]')
      .pause(1000)
      .waitForElementVisible('div[class=s_tab_inner]', 3000)
      .assert.containsText('.s_tab_inner', '网页')
      .end();
  }
};