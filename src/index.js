const express = require('express')
const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')
const cors = require('cors')
// Conección BD
require('./db/dbconnection')

const app = express()
const port = 3000
app.use(cors())
//app.use(express.urlencoded({extended:true}))
//app.use(express.json({type: "*/*"}))
app.use(express.json());
app.use(taskRouter)
app.use(userRouter)


app.listen(port, () => {
    console.log('Server running... http://localhost:' + port)
})