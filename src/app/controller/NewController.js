class NewController {
    // GET
    index(req, res) {
        res.render('news')
    }
    

}

module.exports = new NewController;

