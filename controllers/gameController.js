const Game = require('../models/Game');
const {isValidRequest} = require('../utills/wrappers');
const {fibonacci} = require('../utills/algos');

// Creates game
// @body = username
module.exports.createGame = async (req, res, next) => {
    isValidRequest(req, res);
    const oldUser = await Game.findOne({username: req.body.username});
    if (!oldUser) {
        const game = await new Game({username: req.body.username});
        await game.save();
        if (game) {
            return res.json(game);
        }
        return res.status(500).json({error: "Something is wrong at our end, we are fixing.", data: null});
    }
    return res.status(403).json({error: "User already exists", data: null});

}

// Starts the game
// @body = username
// returns user game
module.exports.start = async (req, res, next) => {
    isValidRequest(req, res);
    const user = await Game.findOne({username: req.username});
    if (user) {
        return res.status(200).json(user);
    }
    return res.status(400).json(null);
}

// Update Round Score
// @body = username, colorChoice, round
// returns updated score
module.exports.updateScore = async (req, res, next) => {
    isValidRequest(req, res);
    const username = req.body.username;
    const colorChoice = req.body.colorChoice;
    const round = req.body.round;
    const game = await Game.findOne({username: username});
    if (game) {
        const fib = await fibonacci(round);
        if (fib.toString() === colorChoice.toString()) {
            game["round" + round] = 10;
        } else {
            game["round" + round] = -5;
        }
        await game.save();
        return res.status(204).json(game);
    }
    return res.status(400).json(null);
}

// Generates ScoreBoard
// @body = username
// returns = username scoreboard
module.exports.scoreBoard = async (req, res, next) => {
    isValidRequest(req, res);
    const username = req.body.username;
    const game = await Game.findOne({username: username});
    if (game) {
        const totalScore = game.round1 + game.round2 + game.round3 + game.round4 + game.round5 + game.round6;
        const updatedGame = await Game.findOneAndUpdate({username: username}, {totalScore: totalScore});
        return res.json(updatedGame);
    }
    return res.json(null);
}