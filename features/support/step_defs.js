
var chai = require('chai');
global.expect = chai.expect;

function Steps(){

   this.Given(/^I have a web browser$/, function (callback) {
     callback();
   });

   this.When(/^I want to visit "([^"]*)"$/, function (url, callback) {
      browser.url(url);
      callback();
   });

   this.Then(/^I see the title "([^"]*)"$/, function (h1Value, callback) {
      chai.expect(browser.getText('h1')).to.be.equal(h1Value);
      callback();
   });

   this.Given(/^I visit "([^"]*)"$/, function (url, callback) {
      browser.url(url);
      callback();
   });

   this.Given(/^the product quantity is (\d+)$/, function (q, callback) {
      chai.expect(browser.getText('span.Food-quantityValue')).to.be.equal(q);
      callback();
   });


   this.When(/^I click in the increase quantity button$/, function (callback) {
    browser.click('.Food-increaseQuantity');
     callback();
   });

   this.Then(/^I see as a new quantity the value (\d+)$/, function (q, callback) {
      chai.expect(browser.getText('span.Food-quantityValue')).to.be.equal(q);
     callback();
   });



}

module.exports = Steps;

