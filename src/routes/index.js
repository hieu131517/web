const newRouter = require('./new');
const siteRouter = require('./site');

function route(app) {
    app.use('/new', newRouter);
    app.use('/', siteRouter);
}
module.exports = route;
