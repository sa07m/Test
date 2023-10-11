const express = require('express')
const bodyParser= require('body-parser')
const cors = require('cors')
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
const sequelize = require('./util/database')

const userRoute = require('./routes/route')

app.use(userRoute)
sequelize.sync()
.then(()=>{
    app.listen(7000)
    console.log('listening to port 7000')
})
.catch(err=>console.log(err))