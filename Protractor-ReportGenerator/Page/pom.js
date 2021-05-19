let pom = function(){

   let firstnumber_input =  element(by.model('first'));
   let secondnumber_input =  element(by.model('second'));
    let gobutton = element(by.css('[ng-click="doAddition()"]'));
    // let operatorType = element.all(by.options('value for (key, value) in operators'));

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