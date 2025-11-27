const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/new", (req, res) => {
  console.log(req.query);
  res.render("new");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
