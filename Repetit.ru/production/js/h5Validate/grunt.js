/*global module*/
var pkgData = require('./package.json');
module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: '<json:package.json>',
    lint: {
      all: ['./grunt.js', './dist/*.js', './test/test.js']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        nonew: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        eqnull: true,
        node: true,
        strict: true,
        boss: false
      }
    },

    server: {
      port: process.env.sauceport
    },

    'saucelabs-qunit': {
      all: {
        username: process.env.sauceuser,
        key: process.env.saucekey,
        urls: ['http://127.0.0.1:' +
          process.env.sauceport + '/test/index.html'],
        tunnelTimeout: ['10000'],
        testname: pkgData.name,
        tags: [''],
        browsers: [
          {
            browserName: 'chrome'
          },
          {
            browserName: 'internet explorer',
            platform: 'Windows 2003',
            version: '8'
          },
          {
            browserName: 'internet explorer'
          },
          {
            browserName: 'firefox'
          },
          {
            browserName: 'safari',
            platform: 'Mac 10.8',
            version: '6'
          },
          {
            browserName: 'internet explorer',
            platform: 'Windows 2012',
            version: '10'
          }
        ]
      }
    }
  });
  console.log(process.env.sauceuser);
  grunt.loadNpmTasks('grunt-saucelabs');

  grunt.registerTask('default', 'lint');
  grunt.registerTask('test', 'lint server saucelabs-qunit');
};
