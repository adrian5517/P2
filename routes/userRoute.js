const express = require('express');

const router = express.Router();

const { createUsers, readUsers, updateUsers, deleteUsers } = require('../controllers/userControllers'); // Ensure this path is correct

//create users
router.post('/', createUsers);

//read users
router.get('/', readUsers);

//update users

router.put('/:id', updateUsers);

//delete users

router.delete('/:id', deleteUsers)

module.exports = router;