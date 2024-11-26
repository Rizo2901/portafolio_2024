import dotenv from 'dotenv';
import sql from 'mssql';

// Cargar variables del entorno desde el archivo .env
dotenv.config();

async function connectToDatabase() {
    try {
        const config = {
            server: process.env.DB_SERVER,
            port: parseInt(process.env.DB_PORT, 10),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            options: {
                encrypt: process.env.DB_ENCRYPT === 'true', // Convertir a booleano
                trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === 'true' // Convertir a booleano
            }
        };

        await sql.connect(config);
        console.log('Successfully connected to SQL Server.');
    } catch (err) {
        console.error('Error connecting to the database:', err.message);
        console.error('Full error details:', err);
    }
}

export default connectToDatabase;

connectToDatabase();
