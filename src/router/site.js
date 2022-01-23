const express = require('express');
const router = express.Router();



const siteController = require('../app/controller/SiteController')


router.use('/:slug', siteController.index);
router.use('/', siteController.search);

module.exports = router;