const {validationResult} = require('express-validator');

module.exports.isValidRequest = (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.json(result);
    }
};
