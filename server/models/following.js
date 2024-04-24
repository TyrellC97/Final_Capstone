const mongoose = require('mongoose')

const followingSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
     },
     post: {
      type: String,
      required: true 
     },
     following: {
      type: Boolean,
      default: true, 
     },
     followingDate: {
        type : Date,
        required: true,
        default: Date.now
     }
     
})


module.exports = mongoose.model("Following", followingSchema)