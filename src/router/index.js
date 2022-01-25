const newsRoute = require('./news');
const siteRoute = require('./site');
const coursesRoute = require('./course');


function route(app) {
    app.use('/news',newsRoute);
    app.use('/courses',coursesRoute);
    app.use('/',siteRoute);
}

module.exports = route;