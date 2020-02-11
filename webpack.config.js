const path = require('path');
const webpack = require('webpack');

const config = ( env, argv ) => {
    // console.log('argv', argv.mode);

    const backend_url = argv.mode === 'production' 
        ? 'https://radiant-plateau-25399.herokuapp.com/api'
        : 'http://localhost:3001';
    
    return {
        entry: [ '@babel/polyfill', './src/index.js' ],
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'main.js'
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'build'),
            compress: true,
            port: 3001
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        presets: [ '@babel/preset-env' ,'@babel/preset-react' ]
                    }
                },
                {
                    test: /\.css$/,
                    loaders: [ 'style-loader', 'css-loader' ],
                },
                {
                    test: /\.scss$/,
                    loaders: [ 
                        'style-loader', 
                        {
                            loader: 'css-loader', 
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader', 
                            options: {
                                sourceMap: true
                            }
                        }
                        ],
                    
                }
            ]
    
        },
        plugins: [
            new webpack.DefinePlugin({ 
                BACKEND_URL: JSON.stringify(backend_url) 
            })
        ]
    }

}

module.exports = config;