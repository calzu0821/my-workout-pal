const router = require('express').Router();
const homeRoutes = require('./homeRoutes')

router.get('/', homeRoutes )


module.exports = router;