const  express= require('express');
const fs = require('fs');
const pwd = './public';
const path = require('path'); // For handling paths
const port = process.env.PORT | 3000;
const app=express();

app.get('/',(req,res)=>{
    render(res,"index.html");
})

app.get('/about',(req,res)=>{
    render(res,'about.html');
})

app.get('/contact',(req,res)=>{
    render(res,'contact.html');
})


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
const render = async (res, file) => {
    try {
        const filePath = path.join(pwd, file);
        const data = await fs.readFile(filePath, 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } catch (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404! page not found</h1>');
    }
};

