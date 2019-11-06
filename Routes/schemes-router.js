const router = require('express').Router();

const Schemes = require("../Models/schemes-model.js");

const validateScheme = require("../Middleware/schemes-validateScheme");
const validateSchemeId = require("../Middleware/schemes-validateSchemeId");

// GET - all schemes
router.get("/", (req, res) => {
    Schemes.get()
    .then(schemes => res.json(schemes))
    .catch(err => res.status(500).json({ error: "Failed to get all schemes data." }))
})

// GET - scheme by ID
router.get("/:id", validateSchemeId, (req, res) => {
    Schemes.get(req.params.id)
    .then(scheme => res.json(scheme))
    .catch(err => res.status(500).json({ error: "Failed to get scheme by that id." }))
})

// GET - all steps associated with a scheme
router.get("/:id/steps", validateSchemeId, (req, res) => {
    Schemes.getSteps(req.params.id)
    .then(steps => res.json(steps))
    .catch(err => res.status(500).json({ error: "Failed to get the steps for that scheme." }))
})

// POST - add a new scheme
router.post("/", validateScheme, (req, res) => {
    Schemes.add(req.body)
    .then(newScheme => res.json(newScheme))
    .catch(err => res.status(500).json({ error: "Failed to add that new scheme to the database." }))
})

// PUT - update a scheme 

// REMOVE - delete a scheme

module.exports = router;