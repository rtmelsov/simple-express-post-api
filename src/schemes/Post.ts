import mongoose from 'mongoose'
import { PostType } from './../types/types'
const postSchema: PostType = {
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    picture: {
        type: String,
    }
}

const Post = new mongoose.Schema(postSchema)

export default mongoose.model('Post', Post)