const express = require('express');
const router = express.Router();
const {start, updateScore, createGame, scoreBoard} = require('../controllers/gameController');
const {body, param, check} = require('express-validator');

router.post('/createGame', body('username').notEmpty().trim().escape(), createGame);
router.post('/start', body('username').notEmpty().trim().escape(), start);
router.post('/updateScore', [
    body('username').notEmpty().trim().escape(),
    body('colorChoice').notEmpty().trim().escape().isNumeric(),
    body('round').notEmpty().trim().escape().isNumeric(),
], updateScore);
router.post('/scoreBoard', body('username').notEmpty().trim().escape(), scoreBoard);

module.exports = router;