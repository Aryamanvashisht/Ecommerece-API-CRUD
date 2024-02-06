import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './routes/info.js'

const app = express()
let PORT = 5000

app.use(bodyParser.json())

app.use('/info',userRouter)

app.get('/', (req,res) => {
    res.send('Welcome to the home page')
})

app.listen(PORT, () => {   
    console.log(`Server is running on port ${PORT}`)
})