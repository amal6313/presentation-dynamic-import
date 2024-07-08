// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js',
//         clean: true, // Cleans the output directory before emit
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                 },
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader'],
//             },
//         ],
//     },
//     resolve: {
//         extensions: ['.js', '.jsx'],
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/index.html',
//         }),
//     ],
//     optimization: {
//         usedExports: true, // Enable tree shaking
//         splitChunks: {
//             chunks: 'all',
//         },
//     },
//     mode: 'production',
// };
