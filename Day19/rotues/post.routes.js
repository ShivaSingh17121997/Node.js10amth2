const express = require("express");
const Post = require("../model/auth.post")
const postRouter = express.Router()


postRouter.post("/add", async (req, res) => {
    try {
        const { title, content, author } = req.body;
        console.log(req.body);

        // Add post to Post collection with reference to User
        const newPost = new Post({ title, content, author });
        await newPost.save();

        res.json({ msg: "Post added", post: newPost });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error adding post", error });
    }
});


// get data

postRouter.get("/get", async (req, res) => {
    try {
        const posts = await Post.find().populate('author');

        res.json({ msg: "Posts retrieved", posts });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error retrieving posts", error });
    }
});


module.exports = postRouter