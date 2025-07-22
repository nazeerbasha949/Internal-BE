const express = require('express');
const router = express.Router();
const {
  createCard,
  getCards,
  getCardById,
  updateCard,
  deleteCard,
  getCardCountByCategory
} = require('../controllers/cardController');
const upload = require('../middleware/upload');

// Create new card
router.post('/', upload.single('image'), createCard);

// Get all cards
router.get('/', getCards);

// Get card by ID
router.get('/:id', getCardById);

// Update card by ID
router.put('/:id',  upload.single("image"), updateCard);

// Delete card by ID
router.delete('/:id', deleteCard);

// Get card count by category (e.g., news, leadership)
router.get('/count/:category', getCardCountByCategory);

module.exports = router;
