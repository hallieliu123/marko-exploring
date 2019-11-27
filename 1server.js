// Allow requiring `.marko` files
require("marko/node-require");
 
const http = require("http");
const html = require("./html"); 
const port = 8080;

http
  .createServer((req, res) => {
    // let the browser know html is coming
    res.setHeader("content-type", "text/html");
 
    // render the output to the `res` output stream
    html.render({ name: "Marko" }, res);
  })
  .listen(port,()=>{
    console.log(" I'm listening !"); 
  });

