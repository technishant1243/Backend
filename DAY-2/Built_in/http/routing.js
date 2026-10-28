import http from "node:http";

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("Welcome");
        res.end();
    }
});

server.listen(9000,(err)=>{
    if(err){
    console.log(err);
return;
    }
    console.log("Server Strated at Port 9000");
});