import users from "../Data/userData.js";

const get = (userId) => users.find((user) => user.id === userId);
const getAll = () => users;


const insert = (details) =>{
    const newUser = {id:users.length+1,...details};
    users.push(newUser);
    return newUser;
}

const remove = (userId) =>{
    const deleteUser = (user, index) => {
        if (user?.id === userId) {
            users.splice(index, 1);
        } 
    };

    return users.find(deleteUser)
};

const update = (userId,newDetails) =>{ 
    let existingUser = null;
    let userIndex;

    users.map((user, index) => {
        if (user.id === userId) {
            existingUser = user;
            userIndex = index;
        }
    });

    if (!existingUser) {
        return false;
    }

    const updatedUser = {
        ...existingUser,
        ...newDetails
    };

    users.splice(userIndex, 1, updatedUser);

    return updatedUser;
};


export default{
    insert,
    get,
    update,
    remove,
    getAll
}

