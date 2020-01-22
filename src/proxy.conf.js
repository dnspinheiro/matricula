const proxy = [
    {
        context: '/api',
        target: 'https://natal.rn.gov.br',
        secure: true,
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { '^/api': '' }
    }
];
module.exports = proxy;
