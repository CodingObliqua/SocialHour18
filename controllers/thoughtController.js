const Thought = require('../models/Thought'); // Import the Thought model

const ThoughtController = {
    // GET all thoughts
    getAllThoughts: async (req, res) => {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // GET a thought by ID 
    getThoughtById: async (req, res) => {
        const thoughtId = req.params.id;

        try {
            const thought = await Thought.findById(thoughtId);

            if(!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }

            res.json(thought);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // POST a new thought
    createThought: async (req, res) => {
        const thoughtData = req.body;

        try {
            const newThought = await Thought.create(thoughtData);
            res.status(201).json(newThought);
        } catch (error) {
            res.status(400).json({ error: 'Invalid thought data'});
        }
    },

    // PUT (update) a thought by ID 
    updateThought: async (req, res) => {
        const thoughtId = req.params.id;
        const updatedThoughtData = req.body;

        try {
            const updatedThought = await Thought.findByIdAndUpdate(
                thoughtId,
                updatedThoughtData,
                {
                    new: true, // Return the updated thought
                }
            );

            if (!updatedThought) {
                return res.status(404).json({ message: 'Thought not found'});
            }

            res.json(updatedThought);
        } catch (error) {
            res.status(400).json({ error:'Invalid thought data'});
        }
    },

    // DELETE a thought by ID

    deleteThought: async (req, res) => {
        const thoughtId = req.params.id;

        try {
            const deletedThought = await Thought.findByIdAndRemove(thoughtId);

            if (!deletedThought) {
                return res.status(404).json({ message: 'Thought not found'});
            }

            res.json({ message: 'Thought deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error'});
        }
    },
};

module.exports = ThoughtController;
