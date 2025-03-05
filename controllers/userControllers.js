const User = require('../models/usersModel'); // Ensure this path is correct
const asyncHandler = require('express-async-handler');

//create users
const createUsers = asyncHandler(async(req, res)=>{
    try{
        const user = await User.create(req.body);
        res.status(200).json(user);
    }catch(err){
        res.status(500)
        throw new Error(err.message);
        
}
    
})

//read users
const readUsers = asyncHandler(async(req, res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);

    }catch(err){
        res.status(500)
        throw new Error(err.message);
    }
})

const updateUsers = asyncHandler(async(req, res)=>{
    try{
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id , req.body , {new:true});
        if(!user){
            res.status(404)
            throw new Error(`Error: User with id ${id} not found`);
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
        
    }catch(err){
        res.status(500)
        throw new Error(err.message);
    }
})

const deleteUsers = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            res.status(404)
            throw new Error(`Error: User with id ${id} not found`);
    
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500)
        throw new Error(err.message);
    }
})

// Make sure all functions are defined above this export
module.exports = {
    createUsers,
    readUsers,
    updateUsers,
    deleteUsers // Ensure this is correctly exported
};