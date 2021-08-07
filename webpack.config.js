const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
    console.log('Goal: ', env.goal, '\nProduction: ', env.production, '\nmySecretKey: ', env.mySecretKey);
    return {
        mode: env.production ? 'production' : 'development',
        devtool: env.production ? false : 'inline-source-map',
        entry: './src/index.ts',
        devServer: env.production ? { contentBase: false } : { contentBase: './dist' },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'Output Management'
            })
        ],
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: env.production ? false : true
        },
        module: {
            rules: [
                {
                    test: /\.m?(js)$/,
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
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        }
    }
}