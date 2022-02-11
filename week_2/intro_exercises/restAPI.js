const express = require("express");
const app = express();

const beers = [];

app.use(express.json());

app.get("/beers", (req, res) => {
    res.json(beers);
});

app.get("/beers/:id", (req, res) => {
    const id = req.params.id;

    for (let beer of beers) {
        if (beer.id == id) {
            res.json(beer);
            console.log(beer);
            return;
        }
    }

    res.status(404).send("Beer wasn't found");
});

app.post("/beers", (req, res) => {
    const beer = req.body;
    console.log(beer);
    beers.push(beer);
    res.send("Beer is added to the array");
});

app.put("/beers/:id", (req, res) => {
    const id = req.params.id;
    const newBeer = req.body;

    for (let i = 0; i < beers.length; i++) {
        let beer = beers[i];
        if (beer.id == id) {
            beers[i] = newBeer;
        }
    }

    res.send('Beer has been edited');
});

app.patch("/beers/:id", (req, res) => {
    const id = req.params.id;
    const newBeer = req.body;

    for (let i = 0; i < beers.length; i++) {
        let beer = beers[i];
        if (beer.id == id) {
            beers[i] = newBeer;
        }
    }

    res.send('Beer has been edited');
});

app.delete("/beers/:id", (req, res) => {
    const id = req.params.id;
    
    for (let i = 0; i < beers.length; i++) {
        let beer = beers[i];

        if(beer.id == id) {
            beers.splice(beers.indexOf(beer), 1);
        }
    }

    res.send('Beer is deleted');
});

app.listen(8080);