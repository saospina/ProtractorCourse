
describe('All', function () {
    //funcion reusable
    function calc(a, b, c) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();

        element.all(by.tagName("option")).each(function (item) {
            item.getAttribute("value").then(function name(values) {
                if (values == c) {
                    item.click();
                }
            })

        })
    }
    it('locators', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');

        var repeat = 0;
        for (let i = 0; i <= repeat; i++) {
            calc(2, 3, "ADDITION");
            calc(10, 2, "DIVISION");
         
        }
        
        element.all(by.repeater("result in memory")).each(function (item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
                console.log(text);
                
            })

        })

    });

});
