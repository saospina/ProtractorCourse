describe('Actions demo', function () {


    it('Open Posse website', function () {
        //moving the mouse into that textbox
        //sendkeys
        //keyboard arrow
        //Keyboard enter
        browser.get("https://posse.com/");
        browser.debugger();
        element(by.model("userInputQuery")).sendKeys("river");
        browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {

            expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
            element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
            element(by.css("a[ng-href*='London/River Island']")).click().then(function () {

            })
        })

    })
})
