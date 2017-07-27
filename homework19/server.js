'use strict';
const http = require('http');
const fs = require('fs');

http
  .createServer((request, response) => {
      // логи
      const { url } = request;
      
      if (url !== undefined) {
        if (url.includes('favicon')) return;
        if (url === '/') {
          const indexHTML = fs.readFileSync(`./index.html`);
          response.end(indexHTML);
          return;
        }
        if (url.includes('router.js')) {
          const JSfile = fs.readFileSync(`.${url}`);
          response.end(JSfile);
        }
        if (url.includes('cat.jpg') {
            const imgFile = fs.readFileSync(`.${url}`);
            response.end(imgFile);
          }

        }

      })
    .listen(3000, 'localhost', err => {
      if (err) throw err;
      console.log('server running at localhost:3000');
    });