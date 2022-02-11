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
app.listen(8080);