import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import connection from './database/db.js';
import Router from './routes/route.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Router);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const port = 8000;

connection(username,password);

app.listen(port,()=>{
    console.log(`server is running  on port ${port}`);
})