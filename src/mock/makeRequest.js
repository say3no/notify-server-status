'use strict'
var fetch = require('node-fetch');
// import {fetch} from 'node-fetch';


const makeRequest = async () => {
	const res = await fetch("http://httpbin.org/get");
	const resJson = await res.json();
	return resJson;
};

module.exports = makeRequest;

