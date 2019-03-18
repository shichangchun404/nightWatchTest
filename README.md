# npm init 

# npm install nightwatch -D

# Download the latest version of the selenium-server-standalone-{VERSION}.jar
# 也可以通过 npm 安装 selenium server 执行安装命令 npm install selenium-server
# 要手动启动 server 服务器， 在 jar 包所在目录执行 java -jar selenium-server-standalone-3.9.1.jar
"selenium" : {
    "start_process" : false,
    "server_path" : "node_modules/selenium-server/lib/runner/selenium-server-standalone-3.141.59.jar",
    "log_path" : "log",
    "host" : "localhost",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "node_modules/.bin/chromedriver"
    }
  },

# npm install chromedriver --save-dev

# 根目录新建nightwatch.js 配置全局指令

# nightwatch.json设置
1 Basic settings

2 Selenium settings
如下是 selenium 的配置选项。Nightwatch可以自动管理 selenium 服务进程，以便你专注于测试工作。 
如果要启用 selenium自启动，设置 start_process 为true 并设置 server_path 值为 selenium jar包路径。

3 Test settings
下面是一些Nightwatch 实例的配置信息。可以配置多个不同的配置对象，模拟多种测试环境。

