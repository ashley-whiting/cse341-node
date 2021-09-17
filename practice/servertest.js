//can require a global module(http) or a local file ./filename
const http = require('http');

const routes = require('./routestest');

const server = http.createServer(routes);       
    
server.listen(3000);




