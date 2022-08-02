const quotesData = require("../data/quotes");

class Quote {
    constructor(data) {
        [this.quote, this.author] = data.split("-");
    }

    static showAll() {
        const quotes = quotesData.map((q) => new Quote(q));
        if (!quotes.length) {
            throw new Error("No quotes found");
        }
        return quotes;
    }

    static showRandom() {
        const randomId = Math.floor(Math.random() * quotesData.length);
        return new Quote(quotes[randomId]);
    }

    static show(id) {
        // Check that user input is in the range of allowed indexes for the quotes array
        if (id >= 1 && id <= quotesData.length) {
            return new Quote(quotesData[id - 1]);
        } else {
            throw new Error("Quote not found");
        }
    }
}

module.exports = Quote;
