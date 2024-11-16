
require('dotenv').config();
const sql = require('mssql');

const config = {
    server: 'localhost',
    port: parseInt('1433'),
    user: 'db_connect',
    password: '2901*',
    database: 'Flowly',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};



async function connectToDatabase() {
    try {
        await sql.connect(config);
        console.log('Successfully connected to SQL Server.');
    } catch (err) {
        console.error('Error connecting to the database:', err.message);
        console.error('Full error details:', err);
    }
}


module.exports = { connectToDatabase };
