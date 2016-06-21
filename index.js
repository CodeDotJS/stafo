'use strict';

var got = require('got');
var cheerio = require('cheerio');
var Promise = require('pinkie-promise');

function stafo(repository) {
	if (typeof repository !== 'string') {
		return Promise.reject(new Error('repository required'));
	}

	var url = 'https://www.github.com/' + repository;
	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);
		return {
			star: $('.social-count').eq(1).text().trim() || null,
			fork: $('.social-count').eq(2).text().trim() || null
		};
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'repository doesn\'t exits';
		}
		throw err;
	});
}

function gitStar(repository) {
	if (typeof repository !== 'string') {
		return Promise.reject(new Error('repository required'));
	}
	var url = 'https://www.github.com/' + repository;
	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);
		return $('.social-count').eq(1).text().trim() || null;
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'repository doesn\'t exist';
		}
		throw err;
	});
}

function gitFork(repository) {
	if (typeof repository !== 'string') {
		return Promise.reject(new Error('repository required'));
	}
	var url = 'https://www.github.com/' + repository;
	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);
		return $('.social-count').eq(2).text().trim() || null;
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'repository doesn\'t exist';
		}
		throw err;
	});
}

exports.repo = stafo;
exports.stars = gitStar;
exports.forks = gitFork;
