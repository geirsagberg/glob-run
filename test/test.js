/* global describe, it */
'use strict'
var assert = require('assert')
var globRun = require('../')

describe('glob-run node module', function () {
  const dirname = __dirname.replace(/\\/g, '/')
  it('must list commands per pattern', function () {
    var commands = globRun('browserify ' + dirname + '/fixtures/*.js -o bundle.js')
    assert.deepEqual(commands, [
      'browserify ' + dirname + '/fixtures/a.js -o bundle.js',
      'browserify ' + dirname + '/fixtures/b.js -o bundle.js'
    ])
    assert.ok(true)
  })

  it('must list commands per pattern, with matching file name', function () {
    var commands = globRun('browserify ' + dirname + '/fixtures/*.js -o *.js')
    assert.deepEqual(commands, [
      'browserify ' + dirname + '/fixtures/a.js -o a.js',
      'browserify ' + dirname + '/fixtures/b.js -o b.js'
    ])
    assert.ok(true)
  })
})
