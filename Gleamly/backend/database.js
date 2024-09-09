const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Freeman19752!',  // Replace with your MySQL root password
  database: 'gleamly'
});

// Open the MySQL connection
connection.connect(error => {
  if (error) {
    console.error('An error occurred while connecting to the DB: ', error.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = connection;