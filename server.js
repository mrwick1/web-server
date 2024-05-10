const http = require('http');


const hostname = 'localhost';

const port = 3000;

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain')
        res.end('Hello from server')
    }else if(req.url === '/login'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain')
        res.end('Logged In')
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain')
        res.end('404: Not found')
    }
})


server.listen(port,hostname,() => {
    console.log(`server is up in http://${hostname}:${port}`)
})