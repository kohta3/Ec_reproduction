const https = require('https');
const fs = require('fs');
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('/opt/bitnami/apache2/conf/bitnami/certs/server.key'),
  cert: fs.readFileSync('/opt/bitnami/apache2/conf/bitnami/certs/server.crt')
};

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  https.createServer(httpsOptions, server).listen(3000, err => {
    if (err) throw err;
    console.log('> Server running at https://localhost:3000');
  });
});
