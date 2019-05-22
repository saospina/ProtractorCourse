
describe('All', function() {
    //funcion reusable
    function Add(a,b) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    }
    it('locators', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        Add(3,2);
        Add(3,5);
    });
        
});
    