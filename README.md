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


