const User = require('../models/usersModel'); // Ensure this path is correct

//create users
const createUsers = async(req, res)=>{
    try{
        const user = await User.create(req.body);
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({message:err.message});
    }
    
}

//read users
const readUsers = async(req, res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);

    }catch(err){
        res.status(500).json({message:err.message})
    }
}

const updateUsers = async(req, res)=>{
    try{
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id , req.body , {new:true});
        if(!user){
            res.status(404).json({message:`User with id ${id} not found`});
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
        
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

const deleteUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: `User with id ${id} not found` });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Make sure all functions are defined above this export
module.exports = {
    createUsers,
    readUsers,
    updateUsers,
    deleteUsers // Ensure this is correctly exported
};