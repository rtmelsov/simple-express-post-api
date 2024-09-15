import {
    getService
} from './../../../handlers/posts/services'
export default async function (req: any, res: any) {
    try {
        const posts = await getService(req.params)
        res.send(posts);
    } catch (e: any) {
        res.status(500).send(e.message)
    }
}