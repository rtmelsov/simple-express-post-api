import Post from './../../../schemes/Post'

export default async function (params: {id: string}) {
    try {
        const { id } = params
        if (!id) {
            throw new Error('id is not found')
        }
        const posts = await Post.findByIdAndDelete(id)
        return posts
    } catch (e: any) {
        throw new Error(e)
    }
}