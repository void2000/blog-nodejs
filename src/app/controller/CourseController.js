const Course = require('../model/Course')

class CourseController {

    // [GET] / course/:slug
    show(req, res, next) {

        Course.findOne({
                slug: req.params.slug
            })
            .then((courses) => {
                courses = courses.toObject();
                res.render('course/show', {
                    courses
                })
            })
            .catch(next);

    }
    // [GET] / course/create
    create(req, res, next) {
        res.render('course/create');
    }

    // [POST] / course/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/${req.body.videoId}/maxresdefault.jpg`
        const course = new Course(formData);
        course.save()
            .then(() => {
                res.redirect('/')
            })
            .catch(error => {

            })

    }


}

module.exports = new CourseController();