const express = require('express')
const authController = require('../controllers/auth-controller')
const { ensureAuht } = require('../middlewares/auth-middleware')
const authRouter = express.Router()

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/test', ensureAuht, (req, res) => res.json({ message: 'ok' }))

module.exports = router