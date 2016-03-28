var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.image_diff_validator = {

  setUp: function (done) {
    'use strict';

    grunt.util.spawn({
      grunt: true,
      args: ['clean', 'imageDiffValidator', '--force']
    }, done);
  },

  createDiff: function (test) {
    'use strict';
    test.expect(1);
    test.equal(grunt.file.exists('test/files/diff/different.jpeg'), true, 'Diff file was not created');

    test.done();
  },

  passSameFiles: function (test) {
    'use strict';
    test.expect(1);
    test.equal(grunt.file.exists('test/files/diff/same.jpeg'), false, 'Diff file was created for same files');

    test.done();
  }
};
