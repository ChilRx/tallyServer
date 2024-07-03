import express from 'express'
import { database } from './config'
import {set,ref} from 'firebase/database'
    

const app = new express()
app.use(express.json())



app.post("/tallyhook", async (req, res) =>{
    try{
       let content = req.body
       await database.set(ref("/responses"), {
        content
       })

     

    }
    catch(err){
        console.log(error)
        res.status(500).send("error storing data")
    }
})

app.listen(3000, ()=>{
    console.log("The server is running on port 3000")
})



