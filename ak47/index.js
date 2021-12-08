const fs = require('fs');

exports.handler = (req, resp, context) => {
    resp.setHeader('Content-Type', 'text/html; charset=utf-8');
    resp.setHeader('Cache-Control', 'max-age=86400');
    const html = fs.readFileSync('./index.html', 'utf8');
    resp.send(html);
}