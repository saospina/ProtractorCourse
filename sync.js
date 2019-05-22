
describe('protractor alert steps', function() {
    
    it('Non angular apps', function() {
        browser.get("http://qaclickacademy.com/practice.php");
        element(by.id("confirmbtn")).click();

    });
        
});
    