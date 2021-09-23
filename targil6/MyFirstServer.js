

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sql = require('./db.js')
const port =  8080;
//var fs = require('fs');


app.get("/",(req,res)=>{res.send('Hello World!')});

app.get("/mycustomers",function(req,res){
    sql.query("SELECT * FROM mycustomers", (err,mysqlres) =>{
        if (err){
            console.log("error: ",err);
            res.status(400).send({message:"error un getting all mycustomers: " +err});
            return;
        }
        console.log("got all mycustomers...");
        res.send(mysqlres);
        return;
    });
});

app.listen( port, () => {console.log('all OK')} );




/*
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
*/


