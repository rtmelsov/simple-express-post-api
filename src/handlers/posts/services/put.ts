import Post from './../../../schemes/Post'

export default async function (body: {
    _id: string,
}) {
    try {
        const post = body
        if (!post._id) {
            throw new Error('id is not found')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost
    } catch (e: any) {
        throw new Error(e)
    }
}