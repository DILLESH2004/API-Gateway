import userDao from '../Models/Persistance/userDao.js'

const getUser = (userId) =>{
    return userDao.get(userId);
};

const getAllUser = () => {
    return userDao.getAll();
}

const addUser = (details) =>{
    return userDao.insert(details);
};

const updateUser = (userId,details) =>{
    return userDao.update(userId,details);
};


const removeUser = (userId) =>{
    userDao.remove(userId);
};



export default{
    addUser,
    getUser,
    updateUser,
    removeUser,
    getAllUser
};