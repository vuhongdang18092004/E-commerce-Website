class NewController {
  // [GET] /new
  index(req, res) {
    res.render('new');
  }
}

module.exports = new NewController();