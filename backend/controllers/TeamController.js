const Team = require('../models/Team')

module.exports = class TeamController {
    static async register(req, res) {
        const { teamName, coach, stadium, city } = req.body

        // Validations: Faz uma série de validações, pois os dados são obrigatórios e
        // é necessário enviar uma resposta de erro para o usuário.

        if (!teamName) {
            res.status(422).json({ message: 'O nome do time é obrigatório!' })
            return
        }

        if (!coach) {
            res.status(422).json({ message: 'o nome do treinador é obrigatório!' })
            return
        }

        if (!stadium) {
            res.status(422).json({ message: 'O nome do estádio é obrigatório!' })
            return
        }

        if (!city) {
            res.status(422).json({ message: 'A cidade é obrigatória!' })
            return
        }

        // check if coach exists (VERIFICAR ESSA VALIDAÇÃO POR COACH, POUCO CONFIÁVEL ESSA VALIDAÇÃO)
        const coachExists = await Team.findOne({ coach: coach })

        if (coachExists) {
            res.status(422).json({ message: 'Esse treinador está empregado em outro time' })
            return
        }

        // create a team
        const team = new Team({
            teamName,
            coach,
            stadium,
            city,
        })

        try {
            const newTeam = await team.save()
            res.status(201).json({ message: 'Time criado com sucesso!', newTeam })
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }

    static async getAllTeams(req, res) {
        const teams = await Team.find().sort('-createdAt')

        res.status(200).json({ teams: teams })
    }
}