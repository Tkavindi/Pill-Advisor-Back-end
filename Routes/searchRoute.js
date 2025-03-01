const express = require('express');
const router = express.Router();
const { getSearchCount, handleSearch } = require('../Controllers/searchController');

// Route to get the current search count
router.get('/search-count', getSearchCount);

// Route to handle a new search
router.post('/search', handleSearch);

module.exports = router;
