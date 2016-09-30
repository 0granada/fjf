
var chai = require('chai');

function Steps(){
    this.Given(/^I visit localhost:(\d+)$/, function (arg1, callback) {
        browser.url('localhost:' + arg1);
        callback();
    });

    this.When(/^the page loads$/, function (callback) {
         var r = browser.waitForExist("body");
         chai.expect(r).to.be.true; 
        callback();
    });

    this.Then(/^the total of order should be equal to (\d+)$/, function (total, callback) {
         chai.expect(browser.getText('.Total-price')).to.be.equal( total);
        callback();
    });
}    

module.exports = Steps;

