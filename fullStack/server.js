  const http = require("http");
  const fs = require("fs");
  const url = require("url");
  var querystring = require("querystring");
  const figlet = require("figlet");

  const server = http.createServer(function(req, res) {
    const page = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == "/") {
      fs.readFile("fullStack.html", function(err, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
      });
    }
    else if (page == "/otherpage") {
      fs.readFile("fullStack2.html", function(err, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
      });
    }
    else if (page == "/pageafterthat") {
      fs.readFile("fullStack3.html", function(err, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
      });
    }else if (page == "/css/fullStack.css"){
      fs.readFile("css/fullStack.css", function(err, data) {
        res.writeHead(200, {"Content-Type": "text/css"});
        res.write(data);
        res.end();
      });
    }else if (page == "/css/fullStack2.css"){
      fs.readFile("css/fullStack2.css", function(err, data) {
        res.writeHead(200, {"Content-Type": "text/css"});
        res.write(data);
        res.end();
      });
    }else if (page == "/css/fullStack3.css"){
      fs.readFile("css/fullStack3.css", function(err, data) {
        res.writeHead(200, {"Content-Type": "text/css"});
        res.write(data);
        res.end();
      });
    }else if (page == "/js/fullStack.js"){
      fs.readFile("js/fullStack.js", function(err, data) {
        res.writeHead(200, {"Content-Type": "text/javascript"});
        res.write(data);
        res.end();
      });
    }else if (page == "/js/fullStack2.js"){
        fs.readFile("js/fullStack2.js", function(err, data) {
          res.writeHead(200, {"Content-Type": "text/javascript"});
          res.write(data);
          res.end();
        });
      }else if (page == "/js/fullStack3.js"){
          fs.readFile("js/fullStack3.js", function(err, data) {
            res.writeHead(200, {"Content-Type": "text/javascript"});
            res.write(data);
            res.end();
          });
      // }else if (page == "/api"){
      //   if("word" in params){
      //     res.writeHead(200, {'Content-Type': 'application/json'});
      //     if(params["word"]=="I" || "is" || "that")
      //     var imageObject {
      //       word: "I",
      //       wordListener2: "is",
      //       wordListener3:"that"
      //     }
      //     res.end(JSON.stringify(objToJson));
      //   }
          fs.readFile("js/fullStack3.js", function(err, data) {
            res.writeHead(200, {"Content-Type": "text/javascript"});
            res.write(data);
            res.end();
          });
    }else{
      figlet("404!!", function(err, data) {
        if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
      });
    }
  });

  server.listen(3000);
