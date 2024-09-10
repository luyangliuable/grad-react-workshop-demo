// webpack.config.js
module.exports = {
    // ...
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': require.resolve(__dirname, 'src'),
            '~': require.resolve(__dirname, 'global.d.ts'),
        },
    },
};
