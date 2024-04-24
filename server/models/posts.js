const mongoose = require('mongoose')


const PostSchema = new mongoose.Schema({
    postBody: {
        type: String,
        required: true
    },
    selectedFile: String,
    postDate: {
        type: Date,
        required: true,
        default: Date.now
    }


})

module.exports = mongoose.model("Post", PostSchema,)