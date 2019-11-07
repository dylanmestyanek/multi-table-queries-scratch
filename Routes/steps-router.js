const router = require('express').Router();

const Steps = require("../Models/steps-model");
const validateStep = require("../Middleware/steps-validateStep");
const validateStepId = require("../Middleware/steps-validateStepId");
const validateSchemeId = require("../Middleware/schemes-validateSchemeId");

// GET - all steps
router.get("/", (req, res) => {
    Steps.get()
    .then(steps => res.json(steps))
    .catch(err => res.status(500).json({ error: "Failed to get steps." }))
});

// GET - step by ID
router.get("/:id", validateStepId, (req, res) => {
    Steps.get(req.params.id)
    .then(step => res.json(step))
    .catch(err => res.status(500).json({ error: "Failed to get step." }))
});

// POST - add a new step to a scheme
router.post("/:id", validateSchemeId, validateStep, (req, res) => {
    Steps.add({ scheme_id: req.params.id, ...req.body })
    .then(newStep => res.status(201).json(newStep))
    .catch(err => res.status(500).json({ error: "Failed to add new step." }))
})

// PUT - update scheme step
router.put("/:id", validateStepId, validateStep, (req, res) => {
    Steps.update(req.params.id, req.body)
    .then(updatedStep => res.status(201).json(updatedStep))
    .catch(err => res.status(500).json({ error: "Failed to update step." }))
});

// DELETE - remove step
router.delete("/:id", validateStepId, (req, res) => {
    Steps.remove(req.params.id)
    .then(deleted => res.json(deleted))
    .catch(err => res.status(500).json({ error: "Failed to remove step." }))
});

module.exports = router;
