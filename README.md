# MEAN Boilerplate

Client module based off of Josh David Miller's awesome ngBoilerplate project, with a couple changes:
- updated versions of Angular, Angular UI Router, and Angular Bootstrap, and Bootstrap
- use Jade for templating

## Getting Started
### Clone the Git repository

```shell
git clone https://github.com/pmaccart/mean-boilerplate.git
```

### Install the client dependencies

```shell
cd mean-boilerplate/client
npm install
bower install
```

### Build and watch the client app
```shell
grunt watch
```

### Run and watch the NodeJS server app
```shell
# in a new shell...
cd mean-boilerplate/server
grunt watch
```

Once running, you can navigate to http://localhost:3000 to view the application.

## Running end-to-end tests
To run the end-to-end tests, a Selenium server must be available to control. The server JAR file
can be installed within the node_modules directory by running the following:
```shell
cd client
node node_modules/protractor/bin/webdriver-manager update
```

The E2E tests can then be run using Grunt
```shell
grunt e2e
```

```shell
client/
  src/
    index.html      # top-level pages
    page2.html      # top-level pages
    app/            # contains app bootstrap file and top-level modules, generally organized by routes
      app.js        # main app configuration file; loads all top-level dependencies
      app.spec.js
      billing/      # top-levl module; contains all resources specific to the module (controllers, templates, stylesheets, etc.)
        billing.js
        billing.spec.js
        billing-controller.js
        billing-controller.spec.js
        billing.tpl.jade
        billing.less
        details/    # submodule within billing; the Billing module will load the Details module as a dependency
          details.js
          details.spec.js
          details-controller.js
          details-controller.spec.js
          details.tpl.jade
          details.less
      dashboard/
        dashboard.js
        dashboard.spec.js
        dashboard-controller.js
        dashboard-controller.spec.js
        dashboard.tpl.jade
        dashboard.less
    assets/        # static resources for the app
      images/
      fonts/
    common/        # holds all shared components that are used across different modules (services, directives, filters)
      data/        # holds mock data to be provided by the services
      filters/
      services/
      less/        # contains application-wide styles; includes loading of framework stylesheets (i.e. Bootstrap), plus any overrides
  vendor/         # contains all third-party resources (scripts, stylesheets, fonts, etc.)
    bootstrap/
    angular/
    angular-ui-router/
    jQuery/       # not all dependencies are actually loaded; Bootstrap depends on this, so Bower pulls it down
  protractor/     # E2E test configuration
  karma/          # Unit test runner configuration
  e2e_tests/      # contains page definitions and e2e test
    pages/        # page representations (see https://code.google.com/p/selenium/wiki/PageObjects)
    tests/        # test specs
```






