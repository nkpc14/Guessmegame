const {model, Schema} = require('mongoose');

module.exports = model('Game', new Schema({
    username: {
        type: String,
        required: true
    },
    round1: {
        type: Number,
        default: 0
    },
    round2: {
        type: Number,
        default: 0
    },
    round3: {
        type: Number,
        default: 0
    },
    round4: {
        type: Number,
        default: 0
    },
    round5: {
        type: Number,
        default: 0
    },
    round6: {
        type: Number,
        default: 0
    },
    totalScore: {
        type: Number,
        default: 0
    }
}, {
    timestamp: true
}))