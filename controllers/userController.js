const User = require('../models/User'); // Import the User model

const UserController = {
    // GET all users
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // GET a user by ID
    getUserById: async (req, res) => {
        const userId = req.params.id;

        try {
            const user = await User.findById(userId);

            if(!user) {
                return res.status(404).json({ message: 'User not found'});
            }
            
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error'});
        }
    },
    
    // POST a new user
    createUser: async (req, res) => {
        const userData = req.body;

        try {
            const newUser = await User.create(userData);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ error: 'Invalid user data'});
        }
    },

    // PUT (update) a user by ID
    updateUser: async (req, res) => {
        const userId = req.params.id;
        const updatedUserData = req.body;

        try {
            const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, {
                new: true, // Return the updated user
            });

            if (!updatedUser) {
                return res.status(404).json({ message:'User not found'});
            }

            res.json(updatedUser);
        } catch (error) {
            res.status(400).json({ error: 'Invalid user data'});
        }
    },

    // DELETE a user by ID
    deleteUser: async (req, res) => {
        const userId = req.params.id;

        try {
            const deletedUser = await User.findByIdAndRemove(userId);

            if(!deletedUser) {
                return res.status(404).json({ message: 'User not found'});
            }
            res.json({ message: 'User deleted successfully'});
        } catch (error) {
            res.status(500).json({ error: 'Internal Sever error'});
        }
    },
};

module.exports = UserController;