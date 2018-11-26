describe('fetch-mock test', () => {
    // beforeEach(() => {
    //     fetch.resetMocks()
    // });

    it('check fetch mock test', async () => {

        var makeRequest = require('../mock/makeRequest');

        jest.mock('fetch', function() {
            return 'hoge;';
        });

        makeRequest().then(function (data) {
            console.log('got data', data);
        }).catch((e) => {
            console.log(e.message)
        });

    });
});

