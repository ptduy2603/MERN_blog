const express = require('express')
const postsController = require('../app/controllers/PostsController')

const router = express.Router()

router.get('/posts', postsController.get)
router.post('/create', postsController.create)
router.put('/update', postsController.update)

module.exports = router