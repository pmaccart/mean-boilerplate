// Generated on 2014-02-17 using generator-angular-fullstack 1.2.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  var userConfig = require('./build.config.js');

  // Define the configuration for all the tasks
  var taskConfig = {


    express: {
      options: {

      },
      dev: {
        options: {
          script: 'server.js',
          debug: true
        }
      },
      prod: {
        options: {
          script: 'server.js',
          node_env: 'production'
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= express.options.port %>'
      }
    },
    delta: {
      express: {
        files: [
          'server.js',
          'lib/**/*.{js,json}'
        ],
        tasks: ['jshint:server', 'express:dev'],
        options: {
          livereload: false,
          nospawn: true, //Without this option specified express won't be reloaded
          spawn: false
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      server: {
        options: {
          jshintrc: 'lib/.jshintrc'
        },
        src: [ 'lib/**/*.js']
      }
    }
  };

  grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

  grunt.renameTask('watch', 'delta');
  grunt.registerTask('server', ['jshint:server', 'express:dev']);
  grunt.registerTask('watch', ['server', 'delta']);

  grunt.registerTask('default', ['server']);


};
