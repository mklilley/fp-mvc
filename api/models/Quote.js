const { Pool } = require("pg");
const pool = new Pool();

class Quote {
    constructor(data) {
        this.quote = data.quote;
        this.author = data.author;
    }

    static async showAll() {
        const { rows } = await pool.query("SELECT * FROM quotes");
        const quotes = rows.map((q) => new Quote(q));
        if (!quotes.length) {
            throw new Error("No quotes found");
        }
        return quotes;
    }

    static async showRandom() {
        const { rows } = await pool.query(
            "SELECT * from quotes ORDER BY RANDOM() LIMIT 1"
        );
        if (rows[0]) {
            return new Quote(rows[0]);
        } else {
            throw new Error("Oops, something went wrong on our side");
        }
    }

    static async show(id) {
        const { rows } = await pool.query(
            "SELECT * FROM quotes WHERE id = $1",
            [id]
        );
        // Check that user input is in the range of allowed indexes for the quotes array
        if (rows[0]) {
            return new Quote(rows[0]);
        } else {
            throw new Error("Quote not found");
        }
    }
}

module.exports = Quote;
