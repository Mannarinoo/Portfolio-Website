var express = require("express") 
var app = express() 
var bodyParser = require("body-parser"); 
var path=require('path'); 
//Import PythonShell module.  
var {PythonShell} =require('python-shell'); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

// Server port
var HTTP_PORT = 8000
// Start server
app.listen(HTTP_PORT, () => 
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
);
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

app.get("/send", (req, res, next)=>{ 
    //Here are the option object in which arguments can be passed for the python_test.js. 
    let options = { 
        mode: 'text', 
        pythonOptions: ['-u'], // get print results in real-time  
        args: [req.query.name, req.query.email, req.query.message] //An argument which can be accessed in the script using sys.argv[1] 
    }; 
      //http://localhost:8000/send?name=Mike&email=joey_mannarino@yahoo.com&message=hey
    var somePath = "src/python/ResetPassword.py";
    var resolvedPath = path.resolve(somePath);
    PythonShell.run(resolvedPath, options, function (err, result){ 
          if (err) throw err; 
          // result is an array consisting of messages collected  
          //during execution of script. 
          console.log('result: ', result.toString()); 
          res.send(result.toString()) 
    }); 
}); 

app.use(function(req, res){
    res.status(404);
});