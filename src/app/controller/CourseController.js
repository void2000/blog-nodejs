const Course = require('../model/Course')

class CourseController {
    
    // [GET] / course/:slug
    show(req, res, next) {
        
        Course.findOne({slug:req.params.slug})
        .then((courses)=>{
            courses = courses.toObject();
            res.render('course/show',{courses})
        })
        .catch(next);
       
    }


}

module.exports = new CourseController();