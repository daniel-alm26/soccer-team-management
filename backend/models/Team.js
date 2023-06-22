const mongoose = require('../db/conn')
const { Schema } = mongoose

const Team = mongoose.model(
    'Team',
    new Schema(
        {            
            teamName: {
                type: String,
                required: true,
            },
            coach: {
                type: String,
                required: true,
            },
            stadium: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            }
        },
        { timestamps: true },
    ),
)

module.exports = Team
