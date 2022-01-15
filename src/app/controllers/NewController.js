const res = require('express/lib/response');

class NewController {
    index(req, res) {
        res.render('new');
    }

    show(req, res) {
        res.send('show');
    }
}

module.exports = new NewController();
