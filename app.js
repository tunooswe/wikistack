const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const { db, Page, User } = require("./models");
const staticMiddleWare = express.static(path.join(__dirname, "/public"));
const wikiRoutes = require("./routes/wiki");
const usersRoutes = require("./routes/users");

app.use(morgan("dev"));
app.use(staticMiddleWare);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/wiki", wikiRoutes);
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

async function inIt() {
  await db.sync({ force: true });
}

inIt();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
