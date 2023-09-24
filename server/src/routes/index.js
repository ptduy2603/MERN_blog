const postsRouter = require('./posts')

const route = app => {
    app.use('/', postsRouter)
}

module.exports = route