import {
    createService
} from './../../../handlers/posts/services'
export default async function (req: any, res: any) {
    try {
        console.log('req.files', req.files.picture)
        const post = await createService(req.body, req.files.picture)
        res.send(post);
    } catch (e: any) {
        res.status(500).send(e.message)
    }
}