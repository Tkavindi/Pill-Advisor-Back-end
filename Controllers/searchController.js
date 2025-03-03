const fs = require('fs');
const filePath = './searchCount.json';

// Load the search count from file
let searchCount = 0;
if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    searchCount = JSON.parse(data).count || 0;
}

// Function to save the count
const saveCount = () => {
    fs.writeFileSync(filePath, JSON.stringify({ count: searchCount }));
};

// Get current search count
const getSearchCount = (req, res) => {
    res.json({ count: searchCount });
};

// Handle a new search
const handleSearch = (req, res) => {
    searchCount++;
    saveCount(); // Save updated count
    res.status(200).json({ message: "Search performed successfully", count: searchCount });
};

module.exports = { getSearchCount, handleSearch };
