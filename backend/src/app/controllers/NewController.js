const Course = require('../models/Course');

class NewController {
  // async index(req, res, next) {
  //   try {
  //     const courses = await Course.find({});
  //     res.json(courses);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  index(req,res, next) {
    Course.find({})
      .then(courses => res.render('new',{
        courses: courses.map(course => course.toObject()),
      }))
      .catch(next);
  }

  show(req, res) {
    res.send('New detail page');
  }
}

module.exports = new NewController();
