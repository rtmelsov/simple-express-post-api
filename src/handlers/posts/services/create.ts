import { fileHandler } from './../../../utils/fileHandler'
import Post from './../../../schemes/Post'
import {PostType} from './../../../types/types'

export default async function (body: PostType, file: any) {
    try {
        const { author, title, content } = body
        const picture = fileHandler(file)
        const post = await Post.create({
            author,
            title,
            content,
            picture
        })
        return post
    } catch (e: any) {
        throw new Error(e)
    }
}