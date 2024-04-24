const express = require('express')
const router = express.Router()
const Following = require('../models/following')



router.get('/', async (req, res)=> {
    try {
        const allFollowing = await Following.find()
        res.json(allFollowing)
    } catch (err) {
       res.status(500).json({ message: err.message}) 
    }})

router.get('/:id', getFollowing, (req, res)=> {
    res.send(res.following)
})
router.post('/', async (req, res) => {
    const following = new Following({
        name: req.body.name,
        post: req.body.post,
        pfp: req.body.pfp
    })
    try{
        const newFollowing = await following.save() 
        res.status(201).json(newFollowing)
    } catch(err) {res.status(400).json({message : err.message})}

})

router.patch('/:id', getFollowing, (req, res)=>{
    const {id} = req.params; 
    Following.findByIdAndUpdate({_id: id}, {following: !false})
  .then(result => res.json(result))
  .catch(err => res.json({err}))
  })
  


router.put('/:id', getFollowing, (req, res)=>{
  const {id} = req.params; 
  Following.findByIdAndUpdate({_id: id}, {following: false})
.then(result => res.json(result))
.catch(err => res.json({err}))
})



router.delete('/:id', getFollowing, async (req, res)=> 
{
    const {id} = req.params;
    Following.findByIdAndDelete({_id: id})


    try { 
        await res.following.deleteOne()
        res.json({ message : "you have unfollowed this account"})
        
    } catch (error) {
        res.send(500).json({ message: err.message })
        
    }
})

async function getFollowing(req, res, next) {
    let account 
    try {
        account = await Following.findById(req.params.id) 
        if (account == null) {
            return res.status(404).json({ message: 'cannot find account' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
        
    }

    res.following = account
    next()
}

module.exports = router  