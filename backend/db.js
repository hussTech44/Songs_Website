const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'ec2-52-59-244-90.eu-central-1.compute.amazonaws.com',
    user: 'root',
    password: 'rootpass',
    database: 'songs_db',
    port: 3306,
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database');
});

module.exports = connection;
