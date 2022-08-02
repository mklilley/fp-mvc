const express = require("express");
const app = express();
const cors = require("cors");

const port = 3000;

quotes = [
    '"PERFECT IS THE ENEMY OF GOOD." -VOLTAIRE',
    '"I’M STILL LEARNING." -MICHELANGELO',
    '"LIFE IS A JOURNEY, NOT A DESTINATION." -RALPH WALDO EMERSON',
    '"LEARNING IS NOT ATTAINED BY CHANCE, IT MUST BE SOUGHT FOR WITH ARDOR AND ATTENDED TO WITH DILIGENCE." -ABIGAIL ADAMS',
    '"YESTERDAY I WAS CLEVER, SO I CHANGED THE WORLD. TODAY I AM WISE, SO I AM CHANGING MYSELF." -RUMI',
    '"BE CURIOUS, NOT JUDGMENTAL." -WALT WHITMAN',
    '"YOU DON’T HAVE TO BE GREAT TO START, BUT YOU HAVE TO START TO BE GREAT." -ZIG ZIGLAR',
    '"BE STUBBORN ABOUT YOUR GOALS AND FLEXIBLE ABOUT YOUR METHODS." -UNKNOWN',
    '"NOTHING WILL WORK UNLESS YOU DO." -MAYA ANGELOU',
    '"NEVER GIVE UP ON A DREAM JUST BECAUSE OF THE TIME IT WILL TAKE TO ACCOMPLISH IT. THE TIME WILL PASS ANYWAY." -EARL NIGHTINGALE',
    '"ANYONE WHO STOPS LEARNING IS OLD, WHETHER AT TWENTY OR EIGHTY." -HENRY FORD',
    '"TELL ME AND I FORGET. TEACH ME AND I REMEMBER. INVOLVE ME AND I LEARN." -BENJAMIN FRANKLIN',
    '"CHANGE IS THE END RESULT OF ALL TRUE LEARNING." -LEO BUSCAGLIA',
    '"LIVE AS IF YOU WERE TO DIE TOMORROW. LEARN AS IF YOU WERE TO LIVE FOREVER." -MAHATMA GANDHI',
    '"A LEARNING CURVE IS ESSENTIAL TO GROWTH." -TAMMY BJELLAND',
];

function getRandomQuote() {
    //Generate a random integer between 0 and length of the quotes array.
    const randomId = Math.floor(Math.random() * quotes.length);
    return quotes[randomId];
}

app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

// To do: Create a route for retrieving a random quote
app.get("/quotes/random", (req, res) => {
    const payload = { quote: getRandomQuote() };
    res.json(payload);
});

// To do: Create a route for retrieving all quotes
app.get("/quotes", (req, res) => {
    const payload = { quotes: quotes };
    res.json(payload);
});

// To do: Refine this route and add handling for out-of-range IDs
app.get("/quotes/:id", (req, res) => {
    const id = req.params.id;
    // Check that user input is in the range of allowed indexes for the quotes array
    if (id >= 1 && id <= quotes.length) {
        res.json({ id: id, quote: quotes[id - 1] });
    } else {
        res.status(404).json({ code: 404, error: "Quote not found" });
    }
});

// To do: Get the server running
app.listen(port, () => {
    `Server running on port ${port}`;
});
