// const http=require('http');
// const server=http.createServer((request,response)=>{
//     response.writeHead(200,{'content-type':'text/html'});
//     if(request.url==='/get'){
//         response.write('you reach the get page')
//     if(request.method==='GET')
//     {
//     response.end('GET');
//     }
   
// }
// else if(request.url==='/post'){
//     response.write('you reach the post page')
//     if(request.method==='POST')
//     {
//     response.end('POST');
//     }

// }
// else if(request.url==='/put'){
//     response.write('you reach the put page')
//     if(request.method==='PUT')
//     {
//     response.end('PUT');
//     }
// }
// else if(request.url==='/delete'){
//     response.write('you reach the delete  page')
//     if(request.method==='DELETE')
//     {
//     response.end('DELETE');
//     }
// }
// else{
//     response.end('NONE FOUND');
// }
// response.end();
// })


// server.listen(3000,()=>console.log("http://localhost:3000"))