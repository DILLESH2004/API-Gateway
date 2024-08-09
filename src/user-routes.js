import express from 'express'
const router =  express.Router();
import { StatusCodes } from 'http-status-codes';


import userService from './Services/userService.js'


const STATUS = {
    success:"OK",
    failure :"NO"
}

router.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id,10);
    const user = userService.getUser(id);
    if(user){
        return res.status(StatusCodes.OK).send({
            status:STATUS.success,
            user
        });
    }


    return res.status(StatusCodes.NOT_FOUND).send({
        status:STATUS.failure,
        message:`user ${id} not  found`
    });
});

router.get('/all',(req,res)  =>{
    const users = userService.getAllUser();
    if(users.length){
        return res.status(StatusCodes.OK).send(users);
    }
    return res.status(StatusCodes.NOT_FOUND).send({
        status:STATUS.failure,
        message:"user ot found"
    });
});

router.post('/',(req,res)=>{
    // const data=[];
    const {body:user} = req;
    const newUser = userService.addUser(user);
    // if(!req.body.name){    
    //     return (res.status(StatusCodes.BAD_REQUEST).send({
    //     status:STATUS.failure,
    //     message:"message is required"
    //     })); // DONE
    // }else{
    // data.push(req.body);
    return  res.status(StatusCodes.CREATED).send({
            status:STATUS.status,
            message:newUser
        }); // DONE
});

router.put('/:id',(req,res)=>{
    // const data=[];
    const {body:user} = req;
    const id = parseInt(req.params.id,10);
    const updateUser = userService.updateUser(id,user);
    // if(!req.body.name){    
    //     return (res.status(StatusCodes.BAD_REQUEST).send({
    //     status:STATUS.failure,
    //     message:"message is required"
    //     })); // DONE
    // }else{
        // data.push(req.body);
    if(updateUser){
        return res.status(StatusCodes.OK).send({
            status:STATUS.status,
            user:updateUser
        }); // DONE
    }else{
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            status:STATUS.failure,
            user:`user ${id} not found`
        })
    }
});


// module.exports = router;
export default router;
