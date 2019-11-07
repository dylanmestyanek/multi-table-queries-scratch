const Steps = require("../Models/steps-model");

const validateStepId = (req, res, next) => {
    const { id } = req.params;

    Steps.get(id)
    .then(step => {
        if (!step) {
            res.status(404).json({ message: "Could not find a step with that ID." })
        } else next();
    })
    .catch(err => res.status(500).json({ error: "Failed to get a step with that ID. "}))
}

module.exports = validateStepId;
