const newRouter = require('./new');

function routes(app) {
  //   app.get("/", (req, res) => {
  //     res.render("home");
  //   });

  //   app.get("/new", (req, res) => {
  //     console.log(req.query);
  //     res.render("new");
  //   });

  app.use('/new', newRouter);

  //   app.post("/new", (req, res) => {
  //     console.log(req.body);
  //     res.send("");
  //   });
}

module.exports = routes;
