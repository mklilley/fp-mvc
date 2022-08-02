const router = require("express").Router();
const quotesController = require("../controllers/quotes");

router.get("/", quotesController.index);
router.get("/random", quotesController.random);
router.get("/:id", quotesController.show);

module.exports = router;
