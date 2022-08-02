const router = require("express").Router();

const Quote = require("../models/Quote");

// To do: Create a route for retrieving a random quote
router.get("/random", (req, res) => {
    try {
        const quote = Quote.showRandom();
        res.json(quote);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// To do: Create a route for retrieving all quotes
router.get("/", (req, res) => {
    try {
        const quotes = Quote.showAll();
        res.json(quotes);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// To do: Refine this route and add handling for out-of-range IDs
router.get("/:id", (req, res) => {
    try {
        const quote = Quote.show(req.params.id);
        res.json(quote);
    } catch (e) {
        res.status(404).json({ error: e.message });
    }
});

module.exports = router;
