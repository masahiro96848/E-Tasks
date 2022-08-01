const mix = require('laravel-mix');
const path = require("path");

// module.exports = {
//     entry: '../js/App.tsx',
//     mode: 'devlopment',
//     entry: './js/App.tsx',
//     output: {
//         filename: "bundle.js",
//         path: path.resolve(__dirname, './dist'),
//         publicPath: "./dist",
//     },
//     devServer: {
//         static: [
//             {
//                 directory: path.resolve(__dirname, "dist"),
//                 publicPath: "/dist",
//             },
//             {
//                 directory: __dirname,
//                 publicPath: "/.src",
//             },
//         ],
//     },
//     devtool: "eval",
//     module: {
//         rules: [
//             {
//                 test: /\.ts$/,
//                 use: "ts-loader",
//                 exclude: /node_modules/,
//             },
//         ],
//     },
//     resolve: {
//         extensions: [".tsx", ".js"]
//     }
// }

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/App.tsx', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
        // module: {
        // entry: '../js/App.tsx',
        // mode: 'devlopment',
        // entry: './js/App.tsx',
        // output: {
        //     filename: "bundle.js",
        //     path: path.resolve(__dirname, './dist'),
        //     publicPath: "./dist",
        // },
        // devServer: {
        //     static: [
        //         {
        //             directory: path.resolve(__dirname, "dist"),
        //             publicPath: "/dist",
        //         },
        //         {
        //             directory: __dirname,
        //             publicPath: "/.src",
        //         },
        //     ],
        // },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".js"]
        }
    }
)