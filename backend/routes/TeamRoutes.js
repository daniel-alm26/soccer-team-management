const router = require('express').Router()

const TeamController = require('../controllers/TeamController')

router.post('/register', TeamController.register)
router.get('/', TeamController.getAllTeams)


module.exports = router
