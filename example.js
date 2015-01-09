var cfapi = require('./index');

cfapi.orgs({ per_page: 1, type: 'brigade' }, function (err, res, body) {
  console.log(body);
});

cfapi.projects(function (err, res, body) {
  console.log(body);
});