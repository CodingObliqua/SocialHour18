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

    // POST route to add a friend to a user's friend list
    addFriend: async (req, res) => {
        try {
            const userId = req.params.userId;
            const friendId = req.params.friendId;

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found'});
            }

            // check if the friendId exist in the database
            const friend = await User.findById(friendId);

            if (!friend) {
                return res.status(404).json({ message:'Friend not found'});
            }

            if (user.friends.includes(friendId)) {
                return res.status(400).json({ message: 'Friend already added' });
            }

            user.friends.push(friendId);
            const updatedUser = await user.save();

            res.status(201).json(updatedUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // DELETE route to remove a friend from user's friends list
    removeFriend: async (req, res) => {
        const userId = req.params.userId;
        const friendId = req.params.friendId;

        try {
            const user = await User.findById(userId);

            if(!user) {
                return res.status(404).json({ message: 'User not found '});
            }

            user.friends = user.friends.filter(friend => friend.toString() !== friendId);
            await user.save();

            res.json({message:'Friend removed successfully'});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error:'Internal server error'});
        }
    },
};

module.exports = UserController;