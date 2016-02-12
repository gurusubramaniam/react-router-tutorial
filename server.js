import express from 'express';
import path from 'path';
import compression from 'compression';


var app= express();

app.use(express.static(__dirname));


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
var PORT = process.env.port || 8000;

app.listen(PORT, function(){
    console.log('app started and running in port 8000');
})