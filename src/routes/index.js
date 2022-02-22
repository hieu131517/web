const adminRouter = require('./admins');
const meRouter = require('./me');
const sensorsRouter = require('./sensors');
const siteRouter = require('./site');

function route(app) {
    app.use('/admins', adminRouter);
    app.use('/me', meRouter);
    app.use('/sensors', sensorsRouter);
    app.use('/', siteRouter);
}
module.exports = route;
