const mongoose = require('mongoose')

const schema = mongoose.Schema({
   title : {
        type : String,
        required : true,
        default : "Default title"
   },
   content : {
        type : String,
        required : true
   },
   author : {
        type : String,
        required : true,
        default : "Anonymous"
   },
   attachment : {
        type : String, //base64
   },
   likeCount : {
        type : Number,
        default : 0,
   },
}, {
    //createdAt, updatedAt
    timestamps : true
})

module.exports = mongoose.model('Post', schema)