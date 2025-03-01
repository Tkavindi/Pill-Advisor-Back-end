let searchCount = 0; // Keeps track of searches

const getSearchCount = (req, res) => {
    res.json({ count: searchCount });
};

const handleSearch = (req, res) => {
    searchCount++; // Increment count properly

    console.log("Search count incremented:", searchCount); // Debugging log

    res.status(200).json({ message: "Search performed successfully", count: searchCount });
};

module.exports = {
    getSearchCount,
    handleSearch,
};
