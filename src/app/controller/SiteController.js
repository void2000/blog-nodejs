const Course = require('../model/Course')

class SiteController {
    // [GET] / index
    index(req, res, next) {
        
        Course.find({})
        .then(courses => {
            courses = courses.map(courses => courses.toObject())
            res.render('home',{courses})
        })
        .catch(error => next(error));


        
    }
    // [GET] / Search
    search(req, res) {
        res.render('search')
    }


}

module.exports = new SiteController;