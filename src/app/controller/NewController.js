const res = require("express/lib/response");

class NewController {
    // GET
    index(req, res) {
        res.render('news')
    }
    // Show
    show(req, res){
        res.send('New details')
    }
    

}

module.exports = new NewController;

