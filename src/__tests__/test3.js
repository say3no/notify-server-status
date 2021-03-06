var fetchMock = require('fetch-mock');
var proxyquire = require('proxyquire')

var myMock = fetchMock.sandbox().mock('*',{hello: 'world'});
var makeRequest = proxyquire('./make-request-node-fetch',{
    'node-fetch': myMock
});

makeRequest().then(function(data) {
    console.log('got data', data);
}).catch((e) => { console.log(e.message)});