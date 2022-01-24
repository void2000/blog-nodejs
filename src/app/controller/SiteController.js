const { json } = require("express/lib/response");
const Course = require('../model/Course')

class SiteController {
    // GET
    index(req, res) {
        Course.find({},function (err,course) {
            if(!err) {
                res.json(course);
            }else{
            res.status(400).json({error:'ERROR!!!'});
            }
        })


       //res.render('home')
    }
    // Search
    search(req, res){
        res.render('search')
    }
    

}

module.exports = new SiteController;