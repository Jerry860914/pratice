const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname,'../server/public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://54.238.185.168:8080'
                //target: 'http://localhost:5000/'
            }   
        }
    }
};
