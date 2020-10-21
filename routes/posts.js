const express = require('express')
const Post = require('../models/PostModel')
const router = express.Router()


// All Posts
router.get("/", async (req,res)=>{
    
    try {
        const posts = await Post.find()
        res.json(posts)
        
    } catch (error) {
        res.json({message : error})
    
    }
})


// Publish Post
router.post("/" , async (req,res)=>{
    const post = new Post({
        title : req.body.title,
        description: req.body.description
    })

    try{

        const savedPost =  await post.save()
        res.json(savedPost)

    } catch(err){
        res.json({message : err})
    }

    
    });



//specificPost

router.get("/:postID" , async(req, res) =>{
    
   try {
    const post = await Post.findById(req.params.postID)
    res.json(post)
       
   } catch (error) {
    res.json({message : error}) 
   } 
        
})

//deletePost

router.delete("/:postID" , async(req, res) =>{
    
    try {
     const removedPost = await Post.remove({_id : req.params.postID})
     res.json(removedPost)
        
    } catch (error) {
     res.json({message : error}) 
    } 
 })

 //Update Post

 router.patch("/:postID" , async(req, res) =>{
    
    try {
     const updatedPost = await Post.updateOne({_id: req.params.postID} , {$set:{
         title: req.body.title
     }})
     res.json(updatedPost)
        
    } catch (error) {
     res.json({message : error}) 
    } 
 })



module.exports = router;