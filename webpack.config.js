const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    console.log('Goal: ', env.goal, '\nmySecretKey: ', env.mySecretKey); //local
    console.log('Production: ', env.production, '\nmySecretKey: ', env.mySecretKey);
    return {
        mode: 'development',
        entry: './src/index.js',
        devServer: {
            contentBase: './dist'
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Output Management'
            })
        ],
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-transform-runtime']
                        }
                    }
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|svg|jpeg|jpg|gif)$/i,
                    type: 'asset/resource'
                }
            ]
        }
    }
}