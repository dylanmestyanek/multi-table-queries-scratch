// Ensures that the Scheme exists, before proceeding to the HTTP requests
const Schemes = require("../Models/schemes-model");

const validateSchemeId = (req, res, next) => {
    const { id } = req.params;

    Schemes.get(id)
    .then(scheme => {
        if (!scheme) {
            res.status(404).json({ message: "Could not find a scheme with that ID." })
        } else next();
    })
    .catch(err => res.status(500).json({ error: "Failed to get a scheme with that ID. "}))
}

module.exports = validateSchemeId;
