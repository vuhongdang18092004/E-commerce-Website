class NewController {
  // [GET] /new
  index(req, res) {
    res.render('new');
  }

  show(req, res) {
    res.send('New detail page');
  }
}

module.exports = new NewController();