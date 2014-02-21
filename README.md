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

## Folder Structure

Client holds Angular, HTML, CSS, Image resources. Can be optimized for production or left raw for dev.

    client/
      |- Gruntfile.js                   # Specific to client app tasks
      |- build.config.js
      |- src/
      |  |- index.tpl.html              # top-level page for unauthenticated users
      |  |- billing.tpl.html            # top-level page for billing
      |  |- dashboard.tpl.html          # top-level page for dashboard
      |  |- app/                        # app specific code
      |  |  |- app.js
      |  |  |- app.spec.js
      |  |  |- billing/                 # subsection with code and tests
      |  |  | |- billing.js
      |  |  | |- billing.spec.js
      |  |  | |- billing-controller.js
      |  |  | |- billing-controller.spec.js
      |  |  | |- billing-template.jade
      |  |  | |- billing.scss
      |  |  | |- details/
      |  |  | | |- details.js
      |  |  | | |- details-controller.js
      |  |  | | |- details-controller.spec.js
      |  |  | | |- details-template.jade
      |  |  | | |- details.scss
      |  |  |- dashboard/
      |  |  | |- products/
      |  |- assets/                     # static files (e.g. images, fonts)
      |  |  |- fonts/
      |  |  |- images/
      |  |- common/                     # shared components (modules/services/directives/filters)
      |  |  |- data/                    # mock data
      |  |  |- filters/
      |  |  | |- phone-number-filter.js
      |  |  |- services/
      |  |  | |- account-service.js
      |  |  | |- billing-service.js
      |  |  |- directives/
      |  |  |- modules/
      |  |- vendor/                     # 3rd-party resources
      |  |  |- bootstrap/
      |  |  |- angular/
      |  |  |- angular-ui-router/
      |  |  |- jQuery/
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
      |  |- controllers/        # static files (e.g. images, fonts)
      |  |- domain/             # Client Data
      |  |- models/             # Integration Data
      |  |- repositories/       # Integrations


Tools hold application and setup related tooling

    tools/
      |- db                     # database scripts







