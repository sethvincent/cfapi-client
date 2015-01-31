var request = require('request');
var qs = require('querystring');

module.exports = {
  orgs: organizations,
  organizations: organizations,
  projects: projects,
  issues: issues
};

function organizations (opts, cb) {
  return req('organizations', opts, cb);
}

function projects (opts, cb) {
  return req('projects', opts, cb);
}

function issues (opts, cb) {
  return req('issues', opts, cb);
}

function req (resource, params, cb) {
  var uri = 'http://codeforamerica.org/api/' + resource;

  if (typeof params === 'function') {
    cb = params;
    params = null;
  }

  if (params) {
    if ("labels" in params) {
      params.labels = params.labels.replace(", ", ",")
      uri += '/labels/' + params.labels
      delete params.labels
    }
    uri += '?' + qs.stringify(params);
  }

  var opts = {
    uri: uri,
    method: 'GET',
    json: true
  }

  return request(opts, cb);
}