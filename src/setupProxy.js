const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api', // 프록시가 필요한 경로
        createProxyMiddleware({
            target: 'http://apis.data.go.kr', // 대상 서버 주소
            changeOrigin: true,
        }),
    );
};
