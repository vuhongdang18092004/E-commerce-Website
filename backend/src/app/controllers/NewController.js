const Course = require('../models/Course');

class NewController {
  async index(req, res) {
    try {
      const courses = await Course.find({});
      res.json(courses);
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }

  show(req, res) {
    res.send('New detail page');
  }
}

module.exports = new NewController();
