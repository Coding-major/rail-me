require("express-async-errors")

const express = require('express')
const app = express()
const {connectDB} = require('./connect/index')

//middlewares
const authRouter = require("./routes/authRoute")
const busRouter = require('./routes/busRoute')

const errorHandlerMiddleware = require('./middlewares/errorHandler')
app.use(express.json())


app.use("/auth", authRouter)
app.use('/buses', busRouter)



app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB()
        console.log('Connection has been established successfully.');
        app.listen(PORT, console.log(`server is well listening on port ${PORT}`))
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

start()




// docker run --name postgresdev -e POSTGRES_PASSWORD=mustey -p 5432:5432 -d postgres