'use strict'

const fetch = require('node-fetch');

class checkStatus {
	static async getStatusCode(url) {
		const res = await fetch(url)
		.catch(err => {
			console.log(err);
			return err;
		});

		return res.status;
	}

	// TODO: 2XXのように先頭番号のみを指定したときもマッチングできるようにする
	static async checkStatusCode(statusCode, expectedCode) {
		const asExpected = statusCode === expectedCode ? true : false;
		return asExpected;
	}
}

module.exports = checkStatus;
