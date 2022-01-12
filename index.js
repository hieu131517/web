const express = require('express')
const app =express()
const port = 8080

app.get('/',(req,res)=>{
    return res.send('hello');
})

app.listen(port, ()=> console.log(`Example app listening at http://localhost:${port}`))
