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