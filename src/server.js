import express from 'express'
import router from './user-routes.js';
import mainRoutes from './mainRoutes.js';

const app =  express();
const PORT = 8080;
const STATUS = {
    status:"OK",
    failure :"NO"
}



app.use(express.json());
app.use('/V1',mainRoutes);

app.use('/V1/user',router);



app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})