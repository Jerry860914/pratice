const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname,'../server/public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://220.132.197.143:8080'
                //target: 'http://localhost:5000/'
            }   
        }
    }
};
