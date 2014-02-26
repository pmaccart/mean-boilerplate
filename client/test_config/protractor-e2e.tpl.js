var basePath = '../';
exports.config = {
  // The address of a running selenium server.
//  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Leave Selenium JAR location blank so that Protractor will used the correct
  // version defined in its package.json file and installed as part of the package.
  seleniumServerJar: null,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
  specs: [
    basePath + 'e2e_tests/**/*.e2e.js',
    basePath + 'e2e_tests/**/*.e2e.coffee'
  ],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 30000
  }
};
