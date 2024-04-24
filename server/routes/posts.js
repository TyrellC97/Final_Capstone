const express = require('express')
const router = express.Router();
const Post = require('../models/posts')
const cors = require('cors')


router.get("/", async (req, res) => {
    try { 
        const allPosts = await Post.find()
        res.json(allPosts)
        
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})
router.get("/:id", getPost, async (req,res) => {
    res.json(res.posts)

})

router.post("/", async (req,res) => {

    const {postBody} = req.body.postBody

  const post = new Post({
    postBody: req.body.postBody,
    selectedFile: req.body.selectedFile
  })
  try { 
    const newPost = await post.save()
    res.status(201).json(newPost)
    
  } catch (error) { res.status(400).json({message: error.message})
    
  }
})
router.patch("/:id", getPost, async (req,res) => {
const {id} = req.params
Post.findByIdAndUpdate({_id: id}) 


if(req.body.postBody != null) {
    res.posts.postBody = req.body.postBody
}

try {
    const updatedPost = await res.posts.save()
    res.json(updatedPost)
    
} catch (error) { res.status(400).json({ message: error.message})
    
}


})


router.delete("/:id", getPost, async(req,res) => {
   const {id} = req.params;
   Post.findByIdAndDelete({_id: id})

    try { await res.posts.deleteOne()
        res.json({message: "Post deleted"})
        
    } catch (error) { res.send(500).json({
        message: error.message
    })
        
    }
})


async function getPost(req, res, next){
    let post 
    try { post = await Post.findById(req.params.id)
        if (post == null) {
            return res.status(404).json({ message: 'cannot load post'})
        }
        
    } catch (error) { return res.status(500).json({ message: err.message})
   
        
    }
    res.posts = post
    next()
}

module.exports = router
