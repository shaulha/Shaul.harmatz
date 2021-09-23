

const express = require('express');
const app = express();
const port =  8080;
var fs = require('fs');



app.get( '/',(req ,res) =>{
    res.send('Hello World!');
    var myData = fs.readFile('gitignoreTemp.txt',function(err,data){
        res.writeHead(200 , {'Content-Type':'text/html'});
        res.write (data);
        return res.end();
    });
    fs.appendFile('.gitignore.gitignore',myData, function (err){
        if (err) throw err;
        console.log('Saved!');
        });
    
});
app.listen( port, () => {console.log('OK')} );

