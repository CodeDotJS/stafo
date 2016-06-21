# stafo

> Get the total number of stars and forks on a particular github repository.

[![Build Status](https://travis-ci.org/CodeDotJS/stafo.svg?branch=master)](https://travis-ci.org/CodeDotJS/stafo)

## Install

```
$ npm install --save stafo
```

## Usage

- `stars` :

```js
'use strict';

const stafo = require('stafo');

stafo.stars('facebook/react').then(gitStars => {
	console.log(gitStars);
	// => 44,022
});
```

- `forks` :

```js
'use strict';

const stafo = require('stafo');

stafo.forks('facebook/react').then(gitForks => {
	console.log(gitForks);
	// => 7,584
});
```

## API

### __```stafo.all('username/repository')```__

- Returns a promise for an array of defined repository property with current stars and forks.


### __```stafo.stars('username/repository')```__

- Returns a promise with ```total stars``` for the specified repository.


### __```stafo.forks('username/repository')```__

- Returns a promise with ```total forks``` for the specified repository.


__```username/repository```__

__`TYPE :`__ `string`

# License

MIT &copy; [Rishi Giri](http://rishigiri.com)
