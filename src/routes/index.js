const adminRouter = require('./admins');
const dkRouter = require('./dieukhien');
const meRouter = require('./me');
const sensorsRouter = require('./sensors');
const siteRouter = require('./site');

function route(app) {
    app.use('/admins', adminRouter);
    app.use('/dieukhien', dkRouter);
    app.use('/me', meRouter);
    app.use('/sensors', sensorsRouter);
    app.use('/', siteRouter);
}
module.exports = route;
