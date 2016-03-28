/*
 * grunt-image-diff-validator
 * https://github.com/el-fuego/grunt-image-diff-validator
 *
 * Copyright (c) 2016 Yuriy Pulyaev
 */

module.exports = function (grunt) {
  'use strict';
  var exec = require('child_process').exec;

  var nullPath = '/dev/null';
  function compare(originalFilePath, currentFilePath, diffFilePath, options, callback) {
    var command = 'compare -metric AE -fuzz ' + options.fuzzFactor + ' ' + originalFilePath + ' ' + currentFilePath + ' ' + nullPath;

    exec(command, null, function (err, stdout, stderr) {

      if (err) {
        grunt.fail.fatal(stderr);
      }

      if (+stderr > 0) {
        grunt.log.error(currentFilePath);

        exec(command.replace(nullPath, diffFilePath), null, function () {
          grunt.fail.warn('File "' + currentFilePath + '" has difference');
          callback(true);
        });

      } else {
        grunt.log.ok(currentFilePath);
        callback(false);
      }
    });
  }

  grunt.registerMultiTask('imageDiffValidator', 'Grunt plugin for check changes at your app screenshots. Reject task when screenshot was changed and create diff file', function () {

    var cb = this.async();
    var options = this.options({
      fuzzFactor: '1%'
    });

    var srcDestArray = grunt.file.expandMapping(this.data.src, this.data.dest, this.data);
    var srcOriginalArray = grunt.file.expandMapping(this.data.src, this.data.original, this.data);

    var cwd = this.data.cwd;
    grunt.file.mkdir(cwd + '/' + this.data.dest);

    function compareNextFile () {
      if (!srcDestArray.length) {
        return cb();
      }
      var srcDest = srcDestArray.shift();

      var currentFilePath = srcDest.src.toString();
      var diffFilePath = cwd + '/' + srcDest.dest.toString();

      var srcOriginal = srcOriginalArray.find(function(srcOriginal) {
        return srcOriginal.src.toString() === currentFilePath;
      });

      var originalFilePath = srcOriginal ? cwd + '/' + srcOriginal.dest.toString() : undefined;

      if (!originalFilePath || !grunt.file.exists(originalFilePath)) {
        grunt.fail.warn('No original file for ' + currentFilePath);
      }

      compare(originalFilePath, currentFilePath, diffFilePath, options, compareNextFile);
    }

    compareNextFile();

  });
};
