
const mysql = require('mysql');



var config =
{
    host: '127.0.0.1',
    user: 'root',
    password: '22125686',
    database: 'stock',
    port: 3306,
    ssl: true
};

function readData(){
    clinet.query('SELECT * FROM investors Limit 30', 
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Selected ' + results.length + ' row(s).');
            
            console.log(JSON.stringify(results));
            
            console.log('Done.');
        })
    clinet.end(
        function (err) { 
            if (err) throw err;
            else  console.log('Closing connection.') 
    });
};

const clinet =  new mysql.createConnection(config);
    clinet.connect(
        function (err) { 
            if (err) { 
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Connection established.");
                readData();
            }
        });





