const express = require('express');
const router = express.Router();



const siteController = require('../app/controller/SiteController')


router.get('/:slug', siteController.index);
router.get('/', siteController.search);

module.exports = router;