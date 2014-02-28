describe 'login page', ->
  it 'should show the dashboard page after login', ->
    browser.get 'http://localhost:3000/#/login'

    element By.id 'email'
    .sendKeys 'test1@slalom.com'

    element By.id 'password'
    .sendKeys 'password1'

    element By.id 'btnLogin'
    .click()

    browser.getCurrentUrl().then (url) ->
      expect url.indexOf 'dashboard'
      .not.toBe(-1)
