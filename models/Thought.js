const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => {
                // Format the timestamp using JavaScript's toISOString()
                return new Date(timestamp).toISOString();
            },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            {
                // Define the structure of nested reaction documents
                reactionText: {
                    type: String,
                    required: true,
                },
            },
        ],
        likeCount: {
            type: Number,
            default: 0, // Default to 0 likes
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function (){
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;