import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import cors from 'cors';
import SequelizeStore from 'connect-session-sequelize';
import db from './database.js';

dotenv.config();

const app = express();


const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
    db: db
});


app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto' 
    }
}));


app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173' 
}));


app.use(express.json());


import UserRoute from './routes/UserRoute.js'; 
import AuthRoute from './routes/AuthRoute.js';  

app.use(UserRoute); 
app.use(AuthRoute);  

app.listen(process.env.APP_PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.APP_PORT}`);
});
