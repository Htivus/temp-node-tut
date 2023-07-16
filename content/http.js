
const http=require('http');

const server =http.createServer((req,res)=>{
    
    if(req.url==='/'){
        res.end('<h1>welcome to my server</h1>');
    }
    if(req.url==='/about'){
        res.end('<h5>ABout page</h1>');
    }
    res.end(
        `<h1>OOPS</h1>
        <a href="/" >back home</a>`
    );
})

server.listen(5000)