import {v4} from 'uuid';
import {resolve} from 'path'

export function fileHandler (file: any) {
    try {
        const fileName = v4() + '.jpg'
        const filePath = resolve('static', fileName)
        file.mv(filePath)
        return fileName
    } catch (e: any) {
        throw new Error(e)
    }
}