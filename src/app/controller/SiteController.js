

class SiteController {
    // GET
    index(req, res) {
        res.render('home')
    }
    // Search
    search(req, res){
        res.render('search')
    }
    

}

module.exports = new SiteController;