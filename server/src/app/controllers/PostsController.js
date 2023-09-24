const PostModel = require('../models/PostModel')

class PostsController {
    // [GET] /https://localhost:5000/posts
    async get (req, res, next) {
       try {
            const posts = await PostModel.find({})
            res.status(200).json(posts)
       }
       catch(err)
       {
            res.status(500).json("ERROR")
            next(err)
       }
    }

    // [POST] localhost:5000/create
    async create(req, res, next) {
       try {            
           const post = new PostModel(req.body)
           await post.save()

           res.status(200).json(post)
       }
       catch(err)
       {
            res.status(500).json("ERROR")
            next(err)
       }
    }

    //[POST] localhost:5000/update
    async update(req, res, next) {
        try {
            const updatedPost = await PostModel.findOneAndUpdate({ _id : req.body._id }, req.body, { new : true })
            res.status(200).json(updatedPost)
        }
        catch(err)
        {
            next(err)
            res.status(500).json("ERROR")
        }
    }
}

module.exports = new PostsController