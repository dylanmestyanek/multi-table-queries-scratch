const validateScheme = (req, res, next) => {
    const scheme = req.body;

    if (!scheme.scheme_name) {
        res.status(404).json({ message: "Please provide a scheme name in the format: 'scheme_name'." })
    } else next();
};

module.exports = validateScheme;