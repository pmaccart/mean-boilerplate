describe('login page', function() {
  it('Should show the home page after login.', function() {
    browser.get('http://localhost:3000/#/login');
    element(by.id('email')).sendKeys('test1@slalom.com');
    element(by.id('password')).sendKeys('password1');
    element(by.id('btnLogin')).click();

    browser.getCurrentUrl().then(function(url) {
      expect(url.indexOf('home')).not.toBe(-1);
    });
  });
});