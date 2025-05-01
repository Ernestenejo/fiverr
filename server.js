const express = require('express')
const app = express()
const sequelize = require('./database.js/sequelize')

const PORT = 5059

app.use(express.json())

const server = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('connected to database successfully')
    } catch (error) {
        console.log('unable to connect to database' + error)
    }
    
}
server()

app.listen(PORT,()=>{
    console.log(`app is listening to PORT: ${PORT}`)
})