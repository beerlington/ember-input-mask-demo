/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/jquery.inputmask/dist/jquery.inputmask.bundle.js');
app.import('bower_components/moment/moment.js');

module.exports = app.toTree();
