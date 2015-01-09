var test = require('tape');
var cfapi = require('./index');

test('get organizations', function (t) {
  cfapi.orgs(function (err, res, body) {
    t.ifError(err);
    t.ok(body);
    t.end();
  });
});

test('get organizations', function (t) {
  cfapi.projects(function (err, res, body) {
    t.ifError(err);
    t.ok(body);
    t.end();
  });
});