const express = require('express');
const mysql = require('mysql');

const router = express.Router();


// Get Foreign_Investor
router.get('/F_BUY',loadData_F_BUY);

router.get('/F_SELL',loadData_F_SELL);
// Get Investment_Trust
router.get('/I_BUY',loadData_I_BUY);

router.get('/I_SELL',loadData_I_SELL);

// Get Dealer_self

router.get('/D_BUY',loadData_D_BUY);

router.get('/D_SELL',loadData_D_SELL);

//Delete Post

////////////
var config =
{
    host: '127.0.0.1',
    user: 'root',
    password: '22125686',
    database: 'stock',
    port: 3306,
    ssl: true
};

function loadData_F_BUY(req,res) {
    const clinet =   new mysql.createConnection(config);
    console.log("load Data");
    var data = [];
    clinet.connect(
         function (err) { 
            if (err) { 
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Connection established.");
                clinet.query('SELECT date, stock_id, close , round((close-open)/open,4)*100 as increase, spread FROM stock.Main where name = "Foreign_Investor" order by spread desc Limit 50 ;', 
                    function (err,  results, fields) {
                        if (err) throw err;
                        else console.log('Selected ' + results.length + ' row(s).');
                        
                        //console.log(JSON.stringify(results));
                        var string = JSON.stringify(results);
                        data = JSON.parse(string);
                        console.log(data);
                        console.log('Done.');
                        
                        res.send(data);
                    })
                clinet.end(
                    function (err) { 
                        if (err) throw err;
                        else  console.log('Closing connection.') 
                });
            }
        });  
}

function loadData_F_SELL(req,res) {
    const clinet =   new mysql.createConnection(config);
    console.log("load Data");
    var data = [];
    clinet.connect(
         function (err) { 
            if (err) { 
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Connection established.");
                clinet.query('SELECT date, stock_id, close , round((close-open)/open,4)*100 as increase, spread FROM stock.Main where name = "Foreign_Investor" order by spread asc Limit 50 ;', 
                    function (err,  results, fields) {
                        if (err) throw err;
                        else console.log('Selected ' + results.length + ' row(s).');
                        
                        //console.log(JSON.stringify(results));
                        var string = JSON.stringify(results);
                        data = JSON.parse(string);
                        console.log(data);
                        console.log('Done.');
                        
                        res.send(data);
                    })
                clinet.end(
                    function (err) { 
                        if (err) throw err;
                        else  console.log('Closing connection.') 
                });
            }
        });  
}

function loadData_I_BUY(req,res) {
    const clinet =   new mysql.createConnection(config);
    console.log("load Data");
    var data = [];
    clinet.connect(
         function (err) { 
            if (err) { 
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Connection established.");
                clinet.query('SELECT date, stock_id, close , round((close-open)/open,4)*100 as increase, spread FROM stock.Main where name = "Investment_Trust" order by spread desc Limit 50 ;', 
                    function (err,  results, fields) {
                        if (err) throw err;
                        else console.log('Selected ' + results.length + ' row(s).');
                        
                        //console.log(JSON.stringify(results));
                        var string = JSON.stringify(results);
                        data = JSON.parse(string);
                        console.log(data);
                        console.log('Done.');
                        
                        res.send(data);
                    })
                clinet.end(
                    function (err) { 
                        if (err) throw err;
                        else  console.log('Closing connection.') 
                });
            }
        });  
}

function loadData_I_SELL(req,res) {
    const clinet =   new mysql.createConnection(config);
    console.log("load Data");
    var data = [];
    clinet.connect(
         function (err) { 
            if (err) { 
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Connection established.");
                clinet.query('SELECT date, stock_id, close , round((close-open)/open,4)*100 as increase, spread FROM stock.Main where name = "Investment_Trust" order by spread asc Limit 50 ;', 
                    function (err,  results, fields) {
                        if (err) throw err;
                        else console.log('Selected ' + results.length + ' row(s).');
                        
                        //console.log(JSON.stringify(results));
                        var string = JSON.stringify(results);
                        data = JSON.parse(string);
                        console.log(data);
                        console.log('Done.');
                        
                        res.send(data);
                    })
                clinet.end(
                    function (err) { 
                        if (err) throw err;
                        else  console.log('Closing connection.') 
                });
            }
        });  
}

function loadData_D_BUY(req,res) {
    const clinet =   new mysql.createConnection(config);
    console.log("load Data");
    var data = [];
    clinet.connect(
         function (err) { 
            if (err) { 
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Connection established.");
                clinet.query('SELECT date, stock_id, close , round((close-open)/open,4)*100 as increase, spread FROM stock.Main where name = "Dealer_self" order by spread desc Limit 50 ;', 
                    function (err,  results, fields) {
                        if (err) throw err;
                        else console.log('Selected ' + results.length + ' row(s).');
                        
                        //console.log(JSON.stringify(results));
                        var string = JSON.stringify(results);
                        data = JSON.parse(string);
                        console.log(data);
                        console.log('Done.');
                        
                        res.send(data);
                    })
                clinet.end(
                    function (err) { 
                        if (err) throw err;
                        else  console.log('Closing connection.') 
                });
            }
        });  
}

function loadData_D_SELL(req,res) {
    const clinet =   new mysql.createConnection(config);
    console.log("load Data");
    var data = [];
    clinet.connect(
         function (err) { 
            if (err) { 
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Connection established.");
                clinet.query('SELECT date, stock_id, close , round((close-open)/open,4)*100 as increase, spread FROM stock.Main where name = "Dealer_self" order by spread asc Limit 50 ;', 
                    function (err,  results, fields) {
                        if (err) throw err;
                        else console.log('Selected ' + results.length + ' row(s).');
                        
                        //console.log(JSON.stringify(results));
                        var string = JSON.stringify(results);
                        data = JSON.parse(string);
                        console.log(data);
                        console.log('Done.');
                        
                        res.send(data);
                    })
                clinet.end(
                    function (err) { 
                        if (err) throw err;
                        else  console.log('Closing connection.') 
                });
            }
        });  
}
module.exports = router;