const mongoose = require('../db/conn')
const { Schema } = mongoose

// Criando Schema com Mongoose
const Player = mongoose.model(
    'Player',
    new Schema(
        {
            team_id: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            age: {
                type: Number,
                required: true,
            },
            position: {
                type: String,
                enum: ['Goalkeeper', 'Defender', 'Midfielder', 'Foward'],
            },
            goals: {
                type: Number,
            },
        },
        { timestamps: true },
    ),
)

module.exports = Player
