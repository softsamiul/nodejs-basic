const http = require('http')
const PORT = 3000;
const hostname = 'localhost'

const myServer = http.createServer((req, res)=> {
    res.writeHead(202, {'content-type': 'text/html'});
    res.write("<h1>Hello</h1>");
    res.end();
})

myServer.listen(PORT, hostname, ()=>{
    console.log(`Server is running at http:/${hostname}/${PORT}`)
})