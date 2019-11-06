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
    .then(newScheme => res.status(201).json(newScheme))
    .catch(err => res.status(500).json({ error: "Failed to add that new scheme to the database." }))
})

// PUT - update a scheme 
router.put("/:id", validateSchemeId, validateScheme, (req, res) => {
    Schemes.update(req.params.id, req.body)
    .then(updatedScheme => res.status(201).json(updatedScheme))
    .catch(err => res.status(500).json({ error: "Failed to update scheme." }))
})

// REMOVE - delete a scheme
router.delete("/:id", validateSchemeId, (req, res) => {
    Schemes.remove(req.params.id)
    .then(deleted => res.json(deleted))
    .catch(err => res.status(500).json({ error: "Failed to remove scheme from the database." }))
})

module.exports = router;