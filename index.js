const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


//uri o la direccion
app.get("/",(req,res)=>{
    res.status(200).json({mensaje: "Hola Mundo"})
})

app.get("/datos",(req,res)=>{
    const json = {
        mensaje: "Creado"
    }
    res.status(201).json(json)
})

/**
 * Se recibe un json por el metodo/verbo post
 * req => request
 * res => response
 */
app.post("/datos",(req,res)=>{
    console.log(req.body)
    console.log(req.headers)
    console.log(req.query)
    const saludo = {
        mensaje: "Hola "+ req.body.nombre
    }
    res.status(200).json(saludo)
})

app.listen(3000,function(){   
    console.log("http://localhost:"+3000)
})