const router = require("express").Router();

const Quote = require("../models/Quote");

router.get("/random", (req, res) => {
    try {
        const quote = Quote.showRandom();
        res.json(quote);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.get("/", (req, res) => {
    try {
        const quotes = Quote.showAll();
        res.json(quotes);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.get("/:id", (req, res) => {
    try {
        const quote = Quote.show(req.params.id);
        res.json(quote);
    } catch (e) {
        res.status(404).json({ error: e.message });
    }
});

module.exports = router;
