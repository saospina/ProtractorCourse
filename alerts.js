
describe('protractor Alert steps', function() {
    
    it('Open nonAngular js website alerts', function() {
        browser.waitForAngularEnabled(false);
        browser.get("http://www.qaclickacademy.com/practice.php");
        element(by.id("confirmbtn")).click();
        // browser.switchTo().alert().accept().then(function() {
        browser.switchTo().alert().dismiss().then(function() {
            browser.sleep(9000)
            
        })
        
    });
        
});
    