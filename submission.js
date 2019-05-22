
describe('Protractor alert steps', function() {
    
    it('Open non angular js website alerts', function() {
        browser.get("https://qaclickacademy.github.io/protocommerce/");
        element(by.name('name')).sendKeys('hola mundo').then(function (result) {
            console.log(result);
            
            
        })
    });
        
});
    