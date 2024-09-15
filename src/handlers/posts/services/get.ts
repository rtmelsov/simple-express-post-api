import Post from './../../../schemes/Post'
import { PostType } from './../../../types/types'

export default async function (params: {id: string}) {
    try {
        const { id } = params
        if (!id) {
            throw new Error('id is not found')
        }
        const posts: PostType[] | null = await Post.findById(id)
        return posts
    } catch (e: any) {
        throw new Error(e)
    }
}