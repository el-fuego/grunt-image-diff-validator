/*
 * grunt-image-diff-validator
 * https://github.com/denis/grunt-image-diff-validator
 *
 * Copyright (c) 2015 Yuriy Pulyaev
 */


module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: ['Gruntfile.js', 'tasks/*.js', 'test/**/*.js']
    },
    // Before generating any new files, remove any previously-created files.
    clean: {
      test: ['test/files/diff/*']
    },

    // Configuration to be run (and then tested).
    imageDiffValidator: {
      test: {
        expand: true,
        flatten: true,
        cwd: 'test/files',
        src: 'current/*',
        original: 'original',
        dest: 'diff'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*.js']
    }

  });


  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'nodeunit']);

};
