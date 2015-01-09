# cfapi-client

A JS wrapper around the CFAPI that works in node & the browser.

Learn more about CFAPI at [the docs](http://cfapi.readme.io/v1.0/docs) and at [the repo](https://github.com/codeforamerica/cfapi).

## Install

```
npm install --save cfapi-client
```

Use in the browser with [browserify](https://github.com/substack/node-browserify).

## Usage

```
var cfapi = require('cfapi-client');
```

### cfapi.projects([options, ]callback);

Request projects from the API.

The options object is optional and accepts these options:

- **per_page:** _String_
  - The number of features to return on each page.
- **name:** _String_
  - Filter on the name the feature.
- **categories:** _String_
  - Filter on the category of the feature
- **type:** _String_
  - Filter on the type of the feature.
- **organization_name:** _String_
  - Filter on the organization's name.
- **organization_type:** _String_
  - Filter on organization's type.


Example usage:

```
cfapi.projects({ per_page: 5 }, function (err, res, body) {
  console.log(body);
});
```

### cfapi.orgs([options, ]callback);

Request organizations (mostly Code for America brigades) from the API.

The options object is optional and accepts these properties:

- **per_page:** _Integer_
  - The number of features to return on each page.
- **name:** _String_
  - Filter on the name the feature.
- **type:** _String_
  - Will return organizations of that type, such as Brigade or Code for All

Example usage:

```
cfapi.orgs({ per_page: 1, type: 'brigade' }, function (err, res, body) {
  console.log(body);
});
```

### cfapi.organizations()

Alias to `cfapi.orgs()`.

## Contributing
- Fork this repo
- Make a branch for your changes
- Install dependencies: `npm install`
- Add/edit tests for changes if applicable
  - Run tests: `npm test`
- Add/edit documentation if applicable
- Send pull request with brief explanation of changes

## License
MIT