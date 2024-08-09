import express from 'express'
import { StatusCodes } from 'http-status-codes';
const mainrouter = express.Router();


mainrouter.get('/ping/user',(req,res)=>{
    res.status(StatusCodes.OK).send('Hello World');
});


export default mainrouter;