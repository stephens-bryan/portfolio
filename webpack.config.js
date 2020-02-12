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
                    
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        'file-loader',
                        {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                            progressive: true,
                            quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                            enabled: false,
                            },
                            pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                            },
                            gifsicle: {
                            interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                            quality: 75
                            }
                        }
                        },
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