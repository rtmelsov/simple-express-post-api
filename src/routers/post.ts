import Router from 'express'
import {
    create,
    get,
    getAll,
    put,
    del
} from './../handlers/posts/controllers'

const router = Router()

router.post('/post', create)
router.get('/posts', getAll)
router.get('/post/:id', get)
router.put('/post', put)
router.delete('/post/:id', del)

export default router