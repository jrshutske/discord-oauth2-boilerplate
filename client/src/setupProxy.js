const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    console.log("middleware:",process.env.REACT_APP_API_URL )
    app.use(
        '/api',
        createProxyMiddleware({
            target: process.env.REACT_APP_API_URL,
            changeOrigin: true,
        })
    );
};