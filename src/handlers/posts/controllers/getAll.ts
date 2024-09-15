import {
    getAllService,
} from './../../../handlers/posts/services'
export default async function (_: any, res: any) {
    try {
        const posts = await getAllService()
        res.send(posts);
    } catch (e: any) {
        res.status(500).send(e.message)
    }
}