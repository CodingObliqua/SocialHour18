const express = require('express');
const router = express.Router();
const ThoughtController = require('../../controllers/thoughtController'); // thoughtController route bug

// GET all thoughts
router.get('/', ThoughtController.getAllThoughts);

// GET a thought by ID
router.get('/:id', ThoughtController.getThoughtById);

// POST a new thought
router.post('/', ThoughtController.createThought);

// PUT (update) a thought by ID
router.put('/:id', ThoughtController.updateThought);

// POST route to create a reaction to a thought
router.post('/:id/reactions', ThoughtController.createReaction);

// DELETE route to remove a reaction from a thought
router.delete('/:id/reactions/:reactionId', ThoughtController.removeReaction);

// DELETE a thought by ID
router.delete('/:id', ThoughtController.deleteThought);

module.exports = router; 