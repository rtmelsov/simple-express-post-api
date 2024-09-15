import {
    putService,
} from './../../../handlers/posts/services'
export default async function (req: any, res: any) {
    try {
        const updatedPost = await putService(req.body)
        res.json(updatedPost);
    } catch (e: any) {
        res.status(500).send(e.message)
    }
}