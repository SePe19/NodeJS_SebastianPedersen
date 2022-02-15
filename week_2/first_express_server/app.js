// import Express
const express = require("express");
const app = express();
// Alternative
// const app = require("express")();

app.use(express.json());

// Endpoint     callback function
app.get("/", (req, res) => {
   res.send({message: "We did it"}); 
});

app.get("/welcome", (req, res) => {
    res.send({message: "welcome"});
});

app.post("/mirror", (req, res) => {
    res.send(req.body);
})


//app.listen ligger i bunden af filen
const PORT = 8080;
app.listen(PORT, (error) => {
    // undefined if there is no error else error presents itself
    console.log(error);
    console.log("Server is running on port", PORT);
});

// How can I send data with a GET request???
// path variable   url: /1
// query string    url: ?key=value&key2=value2