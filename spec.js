describe('angularjs homepage todo list', function () {
  it('should add a todo', function () {
    browser.get('http://gpdev.grantplan.com/GrantPlan_Next_Dev/');

    element(by.model('user.sponsorname')).sendKeys('gsk');
    element(by.model('user.username')).sendKeys('admin1');
    element(by.id('pwd')).sendKeys('123');
    element(by.css("button[class='btn btn-success']")).click();

    titleGot = browser.getTitle().then(function (promisedResult) {
      console.log("Title is : " + promisedResult);
      return promisedResult;
    });
    expect(titleGot).toEqual('GrantPlan - GSK');

    /*var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');
 
    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2); */
  });

});
