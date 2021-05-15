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


## Automating Angular website using CLI -BASIC

First, Go to the basic project available in protrator directory.

Path in my System => C:\Users\Dell\AppData\Roaming\npm\node_modules\protractor\example

Open CMD and go to this particular path tu run the test cases for the angular websites.

Website here is taken=> "https://angularjs.org/" 

Here, example_spec.js file consists the test cases while conf.js consist the configuration how to run the test cases like name of the browser.

```
Command:

protractor conf.js
```
**Source Code =>**

![image](https://user-images.githubusercontent.com/46487696/117854317-03533780-b2a7-11eb-9140-9e64f6ed9df1.png)
![image](https://user-images.githubusercontent.com/46487696/117854382-0fd79000-b2a7-11eb-9486-530c8410491d.png)

**OutPut=>**

First, cmd command

![image](https://user-images.githubusercontent.com/46487696/117858070-1d8f1480-b2ab-11eb-952a-bbb76b962e7d.png)

Second, script execution results

![image](https://user-images.githubusercontent.com/46487696/117858095-24b62280-b2ab-11eb-8543-9258eb0edf25.png)

![image](https://user-images.githubusercontent.com/46487696/117854908-91c7b900-b2a7-11eb-97f1-31d048f92706.png)


## Protractor Framework on Visual Studio Code:

Prerequisite:<br/>
IDE - "Integrated Development Environment"

Download and Setup Visual Studio Code <br/>
[Download VSC](https://code.visualstudio.com/docs/?dv=win)

After setup install support for JavaScript & Typescript in Visual Studio Code.

Now, Create a directory and open in VSC. Inside that create two Folder i.e conf and tests <br/>
Earlier we discuss an default example provided by angular community. We will run the same example using this IDE we setup with built-in CMD.<br/>
Go to the default example location. In my system location is "C:\Users\Dell\AppData\Roaming\npm\node_modules\protractor\example" and store the configuration and testing file accordingly show below.

![image](https://user-images.githubusercontent.com/46487696/118138629-2fe08e00-b424-11eb-93d7-84f35f5c41c2.png)
![image](https://user-images.githubusercontent.com/46487696/118138658-3969f600-b424-11eb-971c-69d5febfee1b.png)

Open CMD in Visual studio code and run the script for automate testing.
```
Command:
        protractor .\conf\conf.js
```

![image](https://user-images.githubusercontent.com/46487696/118138794-59011e80-b424-11eb-8ca5-093ba97ab7ca.png)

[Click Here for the Source Code](https://github.com/kushagra67414/Protractor_Angular_Automation/tree/main/ProtractorDemo)


[Jasmine Cheat sheet](https://devhints.io/jasmine)
[Protractor API Doc](https://www.protractortest.org/#/api)
