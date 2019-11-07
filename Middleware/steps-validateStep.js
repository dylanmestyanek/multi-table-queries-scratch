// Ensures Step object you are adding to the database has the required properties
const validateStep = (req, res, next) => {
    const step = req.body;

    if (!step.step_number || !step.instructions) {
        res.status(404).json({ message: "Please provide a step number and step instructions." })
    } else next();
};

module.exports = validateStep;