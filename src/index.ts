import express from 'express'
import {
    postMethods
} from './routers/index'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'
const DB_URL = `mongodb+srv://user:user@cluster0.btdt9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const PORT = 3000
const app = express();
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', postMethods)

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

startApp()