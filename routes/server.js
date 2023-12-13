
const express = require("express")
const path = require("path")
const db =require ("../db/db.json")
const app = express()
const PORT= 3000
const fs=require("fs")

app.use(express.json())
app.use(express.static("public"))
app.get("/notes",(req,res)=>{
res.sendFile(path.join(__dirname,"./public/notes.html"))
}) 
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"./public/index.html"))
})
app.get("/api/notes",(req,res)=>{
res.json(db)
})
app.post("/api/notes",(req,res)=>{

db.push(req.body)
console.log(db)
fs.writeFileSync("./db/db.json",JSON.stringify(db))
res.json(db)
})
app.listen(PORT,()=>{console.log("app is listening")})