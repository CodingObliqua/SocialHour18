const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+\@.+\..+/, 'Please enter a valid email address'],
        },
        thoughts: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Thought', // Reference to the "Thought" model
          },
        ],
        friends: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User', // Self-reference to the "User" model
            },
        ],
    },
    {
        toJson: {
            virtuals: true,
        },
        id: false, // Disable the default "_id" field
    }
);

// Create a virtual called friendCount to retrieve the length of the user's friends array

userSchema.virtual('friendCount').get(function (){
    return this.friends.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User;