require('dotenv').config()
const express = require('express')
const app = express()
const sequelize = require('./database/sequelize')

const PORT = process.env.PORT

app.use(express.json())




const server = async ()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`app is listening to PORT: ${PORT}`)
        })
        
        await sequelize.authenticate();
        console.log('connected to database successfully')
        await sequelize.sync
        
    } catch (error) {
        console.log('unable to connect to database' + error)
    }
    
}
server()
