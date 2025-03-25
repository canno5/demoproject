const express = require("express");
const router = require("./router/route");
const app = express();
const path = require("path");
const fs = require("fs");

let port = process.env.PORT || 1000;
// app.use('api/auth', router);
// console.log(path.join(__dirname, "../static"));
let viewPath = path.join(__dirname, "../views")
// console.log(viewPath);
let staticPath = path.join(__dirname, "../static");
app.use(express.static(staticPath));
// app.use('/api', express.static(path.join(__dirname, "../static")));
app.use(router);
app.set("view engine", "html");
app.set('views', viewPath);
app.engine("html", (fileName, options, cb)=>{
    fs.readFile(fileName, (err,data)=>{
        // if(!fileName) return err;
        if (err) return cb(err);
        const realData = data.toString();
        return cb(null, realData);
    });
});

app.listen(port, ()=>{
    console.log('I am live to the port '+port);
});