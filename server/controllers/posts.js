import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'

export const getPosts = async(req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages)
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPost = async(req,res) => {
    // const post = req.body
   
    // const newPost = new PostMessage(post)
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })
    try {
        await newPostMessage.save()
        res.status(201).json(newPostMessage)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updatePost = async (req, res) => {
    
    const {id } = req.params;
    const {title, message, selectedFile, creator, tags} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Cannot update that post with that Id');

    
    const updatedPost = {title, message, selectedFile, creator, tags, _id: id}
    await PostMessage.findByIdAndUpdate(id, updatedPost, {new : true});

   res.json(updatedPost)

}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Cannot delete that post with that Id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}


export const likePost = async (req, res) => {
    const {id } = req.params;
  

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Cannot like that post with that Id : ${id}`);

    const likePost = await PostMessage.findById(id)
    const likedPost = await PostMessage.findByIdAndUpdate(id, {likeCount : likePost.likeCount + 1}, {new : true});
    res.json(likedPost);
}

