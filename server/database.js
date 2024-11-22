require('dotenv').config();
const sql = require('mssql');

const config = {
    server: process.env.DB_SERVER,
    port: parseInt(process.env.DB_PORT, 10),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    options: {
        encrypt: process.env.DB_ENCRYPT === 'true',
        trustServerCertificate: process.env.DB_TRUST_CERT === 'true'
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
