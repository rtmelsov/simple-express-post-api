import Post from './../../../schemes/Post'

export default async function () {
    try {
        const posts = await Post.find()
        return posts
    } catch (e: any) {
        throw new Error(e)
    }
}