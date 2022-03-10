const http = require('http')
const PORT = 3000;
const hostname = 'localhost'

const myServer = http.createServer((req, res)=> {
    res.end("Hello world")
})

myServer.listen(PORT, hostname, ()=>{
    console.log(`Server is running at http:/${hostname}/${PORT}`)
})