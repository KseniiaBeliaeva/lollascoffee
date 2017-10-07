const path = require('path');

module.exports = {
    entry: {
        index: "./react.jsx",
        career: "./career.jsx",
        contacts: "./contacts.jsx",
        gallery: "./gallery.jsx",
        news: "./news.jsx",
},
    output: {
        filename: '[name].js',
        path: __dirname + "/dist",
    },
    module: {
        rules: [
            // rules for modules (configure loaders, parser options, etc.)

            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: ["react"] //"es2015"]
                },
            },
        ],
    },
};
