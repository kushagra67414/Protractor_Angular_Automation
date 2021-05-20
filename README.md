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


## Testing A Angular website using Protractor

Website => [Super Calculator](http://juliemr.github.io/protractor-demo/)<br/>

First, Create a calculator.js file to write the test cases. let's save this file inside test directory. <br/>
Second, create conf.js file to configure jasmine framework and call the test file.  <br/>

![image](https://user-images.githubusercontent.com/46487696/118362447-2d5d7000-b5ad-11eb-8fb8-aee3467e4e9e.png)

```
Source Code =>
describe('Demo calculator test',function(){
    it('Addition Test', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('2');
        element(by.css('[ng-click="doAddition()"]')).click();
        let result = element(by.cssContainingText('.ng-binding', '5'));
        expect(result.getText()).toEqual('5');
        browser.sleep(5000);
        
    });
});
```

In above Source Code, we have write the test case for an addtion similar can be go for substraction and so on. <br/>
Now, Go on cmd inside your VCS and use command **"protractor .\conf\conf.js"** and run it.<br/>
If test case is successful we will see a greene dot in console.<br/>

![image](https://user-images.githubusercontent.com/46487696/118362497-5c73e180-b5ad-11eb-9bf4-6b40b70f3304.png)


## Locators in Protractor:

1. some global functions protractor exposed. <br/>
a.element<br/>
b.element.all<br/>

Let's take an Example of Super calculator website.<br/>

![image](https://user-images.githubusercontent.com/46487696/118362860-26cff800-b5af-11eb-805f-868cbb780f61.png)

Here if have to enter a value in first box we have to inspect it and find that element using locators.<br/>
one of the locator is **model**<br/>

![image](https://user-images.githubusercontent.com/46487696/118362847-0c961a00-b5af-11eb-861b-79c30965e722.png)

```
Syntax =>
element(by.model('first')).sendKeys('3');  // here first is value of ng-model
```
  
[To learn more about Locators Click Here](https://www.protractortest.org/#/locators)


**Note =>**
If want to know about best locator for that particular element we can use a chrome extention i.e. ""**POM Builder – Auto-generate CSS/XPath Locator**""<br/>

![image](https://user-images.githubusercontent.com/46487696/118362984-d1481b00-b5af-11eb-82e9-6b4b663cc07b.png)

Click on suggested locator and copy it in your file. we will see thats the best locator for that WebElement.<br/>

Second Extention is **"Protractor recorder"** here if we do some task on that websites it records it and generate the test case. It's an old extention so it might not be an optimum solution. <br/>

Third Extention is "Selenium IDE" it is also same as Protractor recorder but most useful and reliable and stable. <br/>

[Protractor Cheatsheet API](https://gist.github.com/javierarques/0c4c817d6c77b0877fda)


## POM in Protractor => <br/>
Page Object Model (POM) is a design pattern that creates an Object Repository for web UI elements and is widely used in test automation. The model has the advantage of reducing code duplication and improving test maintenance.<br/>

Here => <br/>
1. We separate objects/element locators and actions in separate files.<br/>
2. Test Scripts can refer element locators and actions from these files.<br/>

Lets create a file by name pom.js inside page directory. Follow the below structure 
![image](https://user-images.githubusercontent.com/46487696/118395236-dc11b700-b666-11eb-803e-e84195d40545.png)
![image](https://user-images.githubusercontent.com/46487696/118395253-e92ea600-b666-11eb-9b65-a3ad7c35a2de.png)

**pom.js** source Code => (locators and actions are defined here)
```
let pom = function(){

   let firstnumber_input =  element(by.model('first'));
   let secondnumber_input =  element(by.model('second'));
    let gobutton = element(by.css('[ng-click="doAddition()"]'));
    this.get = function(url){
        browser.get(url);
    };
    this.enterFirstNumber = function(firstno){
        firstnumber_input.sendKeys(firstno);
    };
   
    this.enterSecondNumber = function(secondNo){
       secondnumber_input.sendKeys(secondNo);
    };
    this.clicGo = function(){
        gobutton.click();
    };
    this.VerifyResult = function(output){
        let result = element(by.cssContainingText('.ng-binding', output));
        expect(result.getText()).toEqual(output);
        console.log('frefrvgr');
    };
};

module.exports = new pom();
```

**calculator.js** =>
```
let pom = require('../Page/pom');

describe('Demo calculator test',function(){
    it('Addition Test', function(){
        // browser.get('http://juliemr.github.io/protractor-demo/');
      pom.get('http://juliemr.github.io/protractor-demo/');

        // element(by.model('first')).sendKeys('3');
      pom.enterFirstNumber('5');



        // element(by.model('second')).sendKeys('2');
      pom.enterSecondNumber('5');
        
      // element(by.css('[ng-click="doAddition()"]')).click();
        pom.clicGo();

        pom.VerifyResult('10');
        browser.sleep(5000);
        
    });
});
```

IF here after adding two numbers the ouptut is same as expected by user. the test case will pass.<br/>
Or say if test case doesn't meet the required conditions.

![image](https://user-images.githubusercontent.com/46487696/118395357-986b7d00-b667-11eb-8d14-194e54bc37c8.png)

If test case passes it shows a green dot which indicates all the test cases have been successsed.
![image](https://user-images.githubusercontent.com/46487696/118395376-b507b500-b667-11eb-9758-0f735f2db0c5.png)


[Click Here To Go To Project](https://github.com/kushagra67414/Protractor_Angular_Automation/tree/main/Protractor-POM)


##  Report Generator and Screenshot in Protractor:
Reporter for Protractor that will capture a screenshot after each executed test case and store the results in a HTML report.<br>

First, Download the dependencies for both using CLI.<br>
[Click here for doc](https://www.npmjs.com/package/protractor-jasmine2-screenshot-reporter)<br>
OR<br>
use this command => **npm install protractor-jasmine2-screenshot-reporter --save-dev**

![image](https://user-images.githubusercontent.com/46487696/118793893-abc05780-b8b6-11eb-9af9-b52f0e95d1d0.png)

Second, Open VSC and configure your configuration file.<br>
Configurations:
```
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

exports.config = {
  // ...

  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
}
```

![image](https://user-images.githubusercontent.com/46487696/118793749-85022100-b8b6-11eb-8e16-1b2935e0ea87.png)

Third, After adding open terminal in VSC and run conf.js file in Built-in CLI.

![image](https://user-images.githubusercontent.com/46487696/118794166-ee822f80-b8b6-11eb-8ac4-927fa348ceed.png)

**Report Generated**

![image](https://user-images.githubusercontent.com/46487696/118794329-1a051a00-b8b7-11eb-9a61-0f7def6391aa.png)
![image](https://user-images.githubusercontent.com/46487696/118794401-2be6bd00-b8b7-11eb-9979-04f3c49d961e.png)
![image](https://user-images.githubusercontent.com/46487696/118794447-36a15200-b8b7-11eb-85e5-36f98d812557.png)


[Click Here For the Source Code](https://github.com/kushagra67414/Protractor_Angular_Automation/tree/main/Protractor-ReportGenerator)


## Allure Report Generator:

**First**, Download dependency in CLI.<br>
[Click Here For Doc](https://www.npmjs.com/package/jasmine-allure-reporter)<br>
OR<br>
type => **npm i jasmine-allure-reporter**<br>

![image](https://user-images.githubusercontent.com/46487696/118816786-29dd2800-b8d0-11eb-9edc-ecd3e90927ee.png)


**Second**, Configure your conf.js to call the allure report generator.<br>
```
 var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
```

Add above configuration in onPrepare method present in conf.js<br>
![image](https://user-images.githubusercontent.com/46487696/118816696-116d0d80-b8d0-11eb-9890-93146bb92856.png)


**Third**, check allure-reports are generated or not:<br>

![image](https://user-images.githubusercontent.com/46487696/118817736-2c8c4d00-b8d1-11eb-98fb-2eba82ee2103.png)

In above output, we can see the allure-report directory has been generated and the report generates is in xml Document.<br>

**Fourth**, To generate allure report in HTML extension add "allure command line tool"<br>

[Click Here For Doc](https://www.npmjs.com/package/allure-commandline)<br>
OR <br>
type => npm i allure-commandline<br>

**Notes:**<br>
For this allure command line tool we need java 8 or above version<br>

![image](https://user-images.githubusercontent.com/46487696/118818766-4b3f1380-b8d2-11eb-876b-fade2abf7ea7.png)

**Fifth**, Now go to the allure report directory in my local machine path is "C:\Users\Dell\Desktop\Protractor & Angular\Protractor-POM\allure-results"<br>
From here open CMD upto this above path and to generate HTML report use below command.<br>
```
allure serve C:\Users\Dell\Desktop\Protractor & Angular\Protractor-POM\allure-results -o "C:\Users\Dell\Desktop\Protractor & Angular\Protractor-POM\"
```

OR go upto "C:\Users\Dell\Desktop\Protractor & Angular\Protractor-POM\" and follow
```
allure server
```
**Notes**
Here, -o represent the location where we want to store HTML report file. By default it will store in allure generated directory.<br>

![image](https://user-images.githubusercontent.com/46487696/118820773-3499bc00-b8d4-11eb-95a8-7fa7938a8080.png)



## Integration with github:


First, go to file > Add folder to workspace> select folder which wanna integrate with git&github.<br>
Second, go to source control or ctrl+shift+G and initialize the repository.<br>

![image](https://user-images.githubusercontent.com/46487696/118936345-18485e80-b96a-11eb-8da2-fddbd3b54e21.png)

![image](https://user-images.githubusercontent.com/46487696/118936421-28603e00-b96a-11eb-9bbf-e1a016a27ee4.png)

Now, you will see the add initialized and uncommit. before that we can add file to .gitignore which we do not want to push. just right click and click on add to .gitignore.

![image](https://user-images.githubusercontent.com/46487696/118937387-1d59dd80-b96b-11eb-89bb-2f4361444a68.png)

You, will see .gitignore file has been created

![image](https://user-images.githubusercontent.com/46487696/118937440-2ea2ea00-b96b-11eb-8b4a-39a31e1d9689.png)

Click at push button present at right side of the branch name or right click and then push it.

![image](https://user-images.githubusercontent.com/46487696/118938662-842bc680-b96c-11eb-970a-9de6bb151e57.png)


Go to your github we see our repository has been deployed. <br>
[Click Here](https://github.com/kushagra67414/Protractor-POM) <br>
OR <br>
https://github.com/kushagra67414/Protractor-POM   <br>

![image](https://user-images.githubusercontent.com/46487696/118941247-26e54480-b96f-11eb-83f8-ec60aee53cc1.png)
