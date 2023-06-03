import dotenv from 'dotenv'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import mongoose from 'mongoose'
import cors from '@koa/cors'
import errorHandler from './middleware/errorHandler'
import router from './routes'

const PORT = process.env.PORT || 4000

dotenv.config()

const app = new Koa()

app.use(cors())
app.use(errorHandler)
app.use(bodyParser())

app.use(router.routes())
app.use(router.allowedMethods())

mongoose.connect(process.env.MONGO_URI || '')
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(err => {
    console.log('Error connecting to Mongo', err)
  })
