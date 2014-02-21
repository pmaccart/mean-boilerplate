describe('login page', function() {
  it('Should show the dashboard page after login.', function() {
    browser.get('http://localhost:3000/#/login');
    element(by.id('email')).sendKeys('test1@slalom.com');
    element(by.id('password')).sendKeys('password1');
    element(by.id('btnLogin')).click();

    browser.getCurrentUrl().then(function(url) {
      expect(url.indexOf('dashboard')).not.toBe(-1);
    });
  });
});