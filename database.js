//Database Connection
var mysql = require('mysql2'); 
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'node_js_api'
});

dbConn.connect(); 
//End DB Configuration


module.exports = dbConn