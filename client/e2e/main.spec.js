'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://192.168.20.100:3000/index.html');
    page = require('./main.po');
  });

});
