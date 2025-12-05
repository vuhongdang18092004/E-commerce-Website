const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const db = require('./config/db');

db.connect();

const app = express();
const port = 3000;

const routes = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// app.use(morgan("combined"));

routes(app);

// app.get("/", (req, res) => {
//   res.render("home");
// });

// // app.get("/new", (req, res) => {
// //   console.log(req.query);
// //   res.render("new");
// // });

// app.post("/new", (req, res) => {
//   console.log(req.body);
//   res.send("");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
