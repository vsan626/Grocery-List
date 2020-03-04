const express = require("express");
const app = express();
const path = require("path")
const models = require("./model.js")
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist/')))

app.get("/supermarket", models.grocery.get);

app.listen(port, () => console.log(`Now listening on port ${port}`));
