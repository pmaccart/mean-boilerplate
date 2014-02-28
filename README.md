# MEAN Boilerplate

Client module based off of Josh David Miller's awesome ngBoilerplate project, with a couple changes:
- updated versions of Angular, Angular UI Router, and Angular Bootstrap, and Bootstrap
- use Jade for templating

## Getting Started

First, make sure you have the necessary dependencies installed:
- NodeJS: http://nodejs.org/
- MongoDB: http://www.mongodb.org/downloads
- Git: http://git-scm.com/downloads

### Clone the Git repository

```shell
git clone https://github.com/pmaccart/mean-boilerplate.git
```

### Start MongoDB

Run per the instructions for your host environment:
- http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/
- http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/
- http://docs.mongodb.org/manual/administration/install-on-linux/

### Install grunt-cli and bower as global dependencies (if not already installed)

```shell
npm install -g grunt-cli bower
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

## Folder Structure

Client holds Angular, HTML, CSS, Image resources. Can be optimized for production or left raw for dev.

    client/
      |- Gruntfile.js                   # Specific to client app tasks
      |- build.config.js
      |- src/
      |  |- index.tpl.html              # top-level page for unauthenticated users
      |  |- billing.tpl.html            # top-level page for billing (optional)
      |  |- dashboard.tpl.html          # top-level page for dashboard (optional)
      |  |- app/                        # app specific code
      |  |  |- app.js
      |  |  |- app.spec.js
      |  |  |- billing/                 # subsection with code and tests
      |  |  |  |- billing.js
      |  |  |  |- billing.spec.js
      |  |  |  |- billing-controller.js
      |  |  |  |- billing-controller.spec.js
      |  |  |  |- billing-template.jade
      |  |  |  |- billing.scss
      |  |  |  |- details/
      |  |  |  |  |- details.js
      |  |  |  |  |- details.spec.js
      |  |  |  |  |- details-controller.js
      |  |  |  |  |- details-controller.spec.js
      |  |  |  |  |- details-template.jade
      |  |  |  |  |- details.scss
      |  |  |- dashboard/
      |  |  |  |- dashboard.js
      |  |  |  |- dashboard.spec.js
      |  |  |  |- dashboard-controller.js
      |  |  |  |- dashboard-controller.spec.js
      |  |  |  |- dashboard-template.jade
      |  |  |  |- dashboard.scss
      |  |  |  |- products/
      |  |  |  |  |- products.js
      |  |  |  |  |- products.spec.js
      |  |  |  |  |- products-controller.js
      |  |  |  |  |- products-controller.spec.js
      |  |  |  |  |- products-template.jade
      |  |  |  |  |- products.scss
      |  |- assets/                     # static files (e.g. images, fonts)
      |  |  |- fonts/
      |  |  |- images/
      |  |- common/                     # shared components (modules/services/directives/filters)
      |  |  |- data/                    # mock data (likely only for prototyping)
      |  |  |- filters/
      |  |  |  |- phone-number-filter.js
      |  |  |- services/
      |  |  |  |- account-service.js
      |  |  |  |- billing-service.js
      |  |  |- directives/
      |  |  |- modules/                 # shared modules that are re-used across the application
      |  |  |  |- header/
      |  |  |  |  |- header.js
      |  |  |  |  |- header.spec.js
      |  |  |  |  |- header-controller.js
      |  |  |  |  |- header-controller.spec.js
      |  |  |  |  |- header-template.jade
      |  |  |  |  |- header.scss
      |  |- vendor/                     # 3rd-party resources
      |  |  |- bootstrap/
      |  |  |- angular/
      |  |  |- angular-ui-router/
      |  |- css/                        # CSS
      |- test_config/
      |  |- karma.unit.config.tpl.js
      |  |- protractor.e2e.config.tpl.js
      |- test_e2e/
      |  |- pages/                      # page representations (see [Page Objects](https://code.google.com/p/selenium/wiki/PageObjects))
      |  |- tests/                      # test specs


Server hold Node resources.

    server/
      |- Gruntfile.js           # Specific to server app tasks
      |- server.js              # Node server
      |- lib/
      |  |- middleware.js
      |  |- routes.js
      |  |- config/
      |  |  |- express.config
      |  |  |- passport.config
      |  |  |- env/             # env configuration
      |  |- controllers/        # route handlers
      |  |- models/             # business object representations
      |  |- domain/             # repository object representations
      |  |- repositories/       # Integrations


Tools hold application and setup related tooling

    tools/
      |- db                     # database scripts
