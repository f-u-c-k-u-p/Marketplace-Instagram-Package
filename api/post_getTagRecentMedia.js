const       _ = require('../lib/functions');
const request = require('../request');

module.exports = (req, res) => {

    let { accessToken, tagName, to="to" } = req.body.args;

    let r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!accessToken || !tagName) {
        _.echoBadEnd(r, to, res, 'accessToken, tagName');
        return;
    }

    let uri = `https://api.instagram.com/v1/tags/${tagName}/media/recent?access_token=${accessToken}`;
    
    return request(uri, (err, response, body) => {
        if(!err && response.statusCode == 200) {
            r.contextWrites[to] = JSON.stringify(body);
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = err || JSON.stringify(body);
            r.callback = 'error';
        }

        res.status(200).send(r);
    });
};
