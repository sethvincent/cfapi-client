var request = require('request');
var qs = require('querystring');

module.exports = {
  orgs: organizations,
  organizations: organizations,
  projects: projects
};

function organizations (opts, cb) {
  return req('organizations', opts, cb);
}

function projects (opts, cb) {
  return req('projects', opts, cb);
}

function req (resource, params, cb) {
  var uri = 'http://codeforamerica.org/api/' + resource;
  
  if (typeof params === 'function') {
    cb = params;
    params = null;
  }
  
  if (params) uri += '?' + qs.stringify(params);
  
  var opts = {
    uri: uri,
    method: 'GET',
    json: true
  }

  return request(opts, cb);
}