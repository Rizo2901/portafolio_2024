import dotenv from 'dotenv';
import sql from 'mssql';

dotenv.config();

const config = {
    server: process.env.DB_SERVER || 'localhost',
    port: parseInt(process.env.DB_PORT) || 1433,
    user: process.env.DB_USER || 'db_connect',
    password: process.env.DB_PASSWORD || '2901*',
    database: process.env.DB_NAME || 'Flowly',
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

export default connectToDatabase;

connectToDatabase();
