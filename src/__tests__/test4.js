describe('fetch-mock test', () => {
    // beforeEach(() => {
    //     fetch.resetMocks()
    // });

    it('check fetch mock test', async () => {
        // fetch.mockResponseOnce(JSON.stringify({data: '12345'}))
        // jest.mock('node-fetch', function () {
        //         return 'mocked response';
        //
        //     },
        //     {virtual: true},
        // );
        // jest.requireMock('node-fetch', function () {
        //         return 'mocked response';
        //     }, {virtual: true},
        // );

        const returnBody = {
            status: 200,
            method: 'get',
            returnBody: {'hoge':""}
        };
        global.fetch = jest.fn().mockImplementationOnce(() => {
            return new Promise((resolve, reject) => {
                resolve({
                    ok: true,
                    status,
                    json: () => {
                        return returnBody ? returnBody : {};
                    },
                });
            });
        });

        var makeRequest = require('../mock/makeRequest');

        makeRequest().then(function (data) {
            console.log('got data', data);
        }).catch((e) => {
            console.log(e.message)
        });

    });
});

