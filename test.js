var test = require('tape');
var cfapi = require('./index');

test('get organizations', function (t) {
  cfapi.orgs(function (err, res, body) {
    t.ifError(err);
    t.ok(body);
    t.end();
  });
});

test('get issue', function (t) {
  cfapi.issues({ per_page: 1 }, function (err, res, body) {
    t.ifError(err, "No errors");
    t.ok(body, 200);
    t.equal(body.objects.length, 1)
    t.end();
  });
});

test('get labeled issue', function (t) {
  cfapi.issues( { per_page: 1, labels: "help wanted, bug" }, function (err, res, body) {
    t.ifError(err, "No errors");
    t.ok(body, 200);
    labels = body.objects[0].labels
    function hasHelpWantedLabel(element, index, array) {
      return element.name == "help wanted"
    }
    function hasBugLabel(element, index, array) {
      return element.name == "bug"
    }
    t.ok(labels.some(hasHelpWantedLabel), "Returns help wanted label")
    t.ok(labels.some(hasBugLabel), "Returns bug label")
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