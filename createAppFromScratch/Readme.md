#Step 1
Run `npm init` and click enter to create package.json

#Step 2
Create `index.js` file and some es6 logic

#Step 3
To convert the files to es2015 we need to use babel
so install babel-cli and we also need presets to convert to which format we need
`npm install babel-cli --dev`
`npm install babel-preset-2015 --save`

#Step 4
Create a `.babelrc` file to set the default values
{
    "presets":[
        "es2015"
    ]
}

#Step 5
Then run
`./node_modules/.bin/babel index.js -o bundle.js`
this creates bundle.js file with es2015 conversion

#Step 6
Create `scripts in package.json` to run this files through commands.

'scripts':{
    'start':'node index.js'
    'build':'./node_modules/.bin/babel index.js -o bundle.js'
}

#Step 7
The next things coming into picture is webpack.
In webpack we have loaders and plugins.
loaders are used for performing actions during loading processes.
plugins are actions performed on bundled outputs.
To config all these we need to create `webpack.config.js` file

const webpack = require('webpack');
module.exports = {
    entry: './index.js', **entrypoint**
    output: { **outputfiledir**
        path: __dirname,
        filename: './bundle.js'
    },
    mode: 'development', **dev/prod Mode**
    module: { 
        rules: [ **module for loaders**
            {
                test:/\.js$/,
                loader:'babel-loader'
            }
        ]
    }
}

#Step 8
To run application we use webpack-dev-server
`npm install webpack-dev-server`
Now we can't see application running because there is no html file defined so we will create `index.html` file and set that in webpack
We also add `context` option which helps to set the root directory position




