const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/userController'); 

//GET all users
router.get('/', UserController.getAllUsers);

// GET a user by ID
router.get('/:id', UserController.getUserById);

//POST a new user
router.post('/', UserController.createUser);

// PUT (update) a user by ID
router.put('/:id', UserController.updateUser);

//  POST route Add a friend to a user's friends list  
router.post('/:id/friends/:friendId' ,UserController.addFriend);

// DELETE Remove a friend from users friends list
router.delete('/:id/friends/:friendId', UserController.removeFriend);

// DELETE a user by ID
router.delete('/:id', UserController.deleteUser);
module.exports = router;