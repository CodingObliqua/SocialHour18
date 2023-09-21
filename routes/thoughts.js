const express = require('express');
const router = express.Router();
const ThoughtController = require('../controllers/thoughtController');

// GET all thoughts
router.get('/', ThoughtController.getAllThoughts);

// GET a thought by ID
router.get('/:id', ThoughtController.getThoughtById);

// POST a new thought
router.post('/', ThoughtController.updateThought);

// DELETE a thought by ID
router.delete('/:id', ThoughtController.deleteThought);

module.exports = router; 