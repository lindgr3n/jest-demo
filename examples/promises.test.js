import {fetchData, fetchDataPromise} from './promises'

test('callback test', done => {
    function callback(data) {
        expect(data).toBe('odm callback!');
        done();
    }

    fetchData(callback);
})

it('Promise test', () => {
    expect.assertions(1);
    return fetchDataPromise().then(data => {
        expect(data).toBe('odm promise!');
    });
})