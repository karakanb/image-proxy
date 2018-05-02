const url = require('url');
var httpProxy = require('http-proxy');

module.exports = (request, response) => {

  const urlToGet = url.parse(request.url, true).query.url;
  var proxy = httpProxy.createProxyServer();
  proxy.web(request, response, {
    changeOrigin: true,
    target: urlToGet
  });
}