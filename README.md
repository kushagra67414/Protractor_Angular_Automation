# Protractor_Angular_Automation
E2E testing of Angular Websites using protractor to overcome synchronization issues.

## Why Do we Need Protractor ???

1. Selenium Driver dost not have methods/featues to locate elements based on Angular specific properties/locators. Locators such as waitForAngular, By.binding, by.repeater and so on.
2. protracter is a wrapper over webdriverJS and provide support to find angular specific elements.
3. To overcome Synchronization issues while automating Angular(JS) application with selenium webdriver.
4. Protractor allows Asynchronization which allows multiple things to happen at the same time.


## Protractor Architecture:

1. WebdriverJS is the javascript binding for the selenium webdriver API.
2. Protractor is a wrapper around WebDriverJS. It can use a function of webdriverjs and has additional features to handle Angular locators/elements
3. Both WebdriverJS and Protractor are node.js application.
4. Also protractor executes commands to ensure application is stabilized before performing any action on the browser.

![image](https://user-images.githubusercontent.com/46487696/117838064-9e441580-b297-11eb-9b02-a4e74c727125.png)


## Protractor setup in Windows CLI:

First, Install Node.js

[Click Here](https://nodejs.org/en/download/)

Check the version of the node and npm in CLI.
![image](https://user-images.githubusercontent.com/46487696/117840390-bcab1080-b299-11eb-9d81-8ab5d6da9663.png)

Now Check if Environment path is setup or not. If not do it manually.

![image](https://user-images.githubusercontent.com/46487696/117840756-14497c00-b29a-11eb-8f72-0b9a72ed48dd.png)
![image](https://user-images.githubusercontent.com/46487696/117840867-26c3b580-b29a-11eb-84ff-f89eb94df2af.png)

**Second, Install Protractor**

Command: 
```
npm -g protractor

protractor --version
```
npm is the package manager of node and -g flag is used to download protractor globally.

![image](https://user-images.githubusercontent.com/46487696/117841246-84f09880-b29a-11eb-89f0-8d91987cca15.png)


**Third, Install all the Webdrivers**

Command:
```
webdriver-manager update
```
![image](https://user-images.githubusercontent.com/46487696/117842399-84a4cd00-b29b-11eb-9170-3e0606716cd5.png)
![image](https://user-images.githubusercontent.com/46487696/117842465-95554300-b29b-11eb-948d-c1b747a42707.png)

