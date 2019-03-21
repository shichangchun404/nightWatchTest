### npm init 

### npm install nightwatch -D

### npm install chromedriver -D

### npm install selenium-server -D

### 新建nightwatch.conf.js 配置设置信息 

自己按照官网通过nightwatch.json设置时，总是提示找不到server_path文件路径，故改写。
1 Basic settings

2 Selenium settings
如下是 selenium 的配置选项。Nightwatch可以自动管理 selenium 服务进程，以便你专注于测试工作。 
如果要启用 selenium自启动，设置 start_process 为true 并设置 server_path 值为 selenium jar包路径。由于目前没有用到。故没配置。

3 Test settings
是一些Nightwatch 实例的配置信息。可以配置多个不同的配置对象，模拟多种测试环境。

### npm install mochawesome 
输出漂亮的测试报告