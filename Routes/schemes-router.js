const router = require('express').Router();

const Schemes = require("../Models/schemes-model.js");

// GET - all schemes
router.get("/", (req, res) => {
    Schemes.get()
    .then(schemes => res.json(schemes))
    .catch(err => res.status(500).json({ error: "Failed to get all schemes data." }))
})

// GET - scheme by ID

// GET - all steps associated with a scheme

// POST - add a new scheme

// PUT - update a scheme 

// REMOVE - delete a scheme

module.exports = router;