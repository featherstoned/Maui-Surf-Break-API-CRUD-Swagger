const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var breaks = [
    { id: 0, name: "sandpiles" },
    { id: 1, name: "kalama bowls" },
    { id: 2, name: "launiupoko" },
    { id: 3, name: "thousand peaks" },
];

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// the GET - lists all the breaks  
app.get("/breaks", (req, res) => {
    res.send(breaks);
});

// the POST - adds a new break
app.post("/break", (req, res) => {
    const newBreak = { id: req.body.id, name: req.body.name };
    breaks.push(newBreak);
    res.send(`${JSON.stringify(newBreak)} created`);
});

// the DELETE - deletes a break by id
app.delete("/break/:id", (req, res) => {
    const breakId = parseInt(req.params.id);
    breaks = breaks.filter((item) => item.id !== breakId);
    res.send(`Break with ID ${breakId} deleted`);
});

// the PUT - updates a break by ID
app.put("/break/:id", (req, res) => {
    const breakId = parseInt(req.params.id);
    const updatedName = req.body.name;

    const breakToUpdate = breaks.find((item) => item.id === breakId);

    if (!breakToUpdate) {
        res.status(404).send("Break not found");
    } else {
        breakToUpdate.name = updatedName;
        res.send(`Break with ID ${breakId} updated`);
    }
});

app.listen(4000, () => console.log('Listening on 4000'));
