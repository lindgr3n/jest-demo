function fetchData(callback) {
    return callback('odm callback!')
}

function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('odm promise!');
        }, 250);
    })
}

module.exports = {fetchData, fetchDataPromise}