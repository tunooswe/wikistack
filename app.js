const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const { db } = require("./models");
const layout = require("./views/layout");
const staticMiddleWare = express.static(path.join(__dirname, "/public"));

app.use(morgan("dev"));

app.use(staticMiddleWare);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(layout(""));
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
