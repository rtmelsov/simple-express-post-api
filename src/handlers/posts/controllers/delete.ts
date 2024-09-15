import {
    delService
} from './../../../handlers/posts/services'
export default async function (req: any, res: any) {
    try {
        const posts = await delService(req.params)
        res.json(posts);
    } catch (e: any) {
        res.status(500).send(e.message)
    }
}