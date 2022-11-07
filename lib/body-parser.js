const qs = require('querystring');

const getRequestBody = request => new Promise((resolve, reject) => {
    let formData = '';

    request.on('data', buffer => formData += buffer.toString());
    request.on('error', reject);

    request.on('end', () => {
        const parsedData = qs.parse(request);
        console.log(parsedData);
        return resolve(parsedData);

    })
})

module.exports = getRequestBody;
