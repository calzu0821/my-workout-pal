const router = require('express').Router();
const homeRoutes = require('./homeRoutes')
const apiRoutes = require('./api')

// localhost:3001/
router.get('/', homeRoutes )

// localhost:3001/community
router.get('/community', homeRoutes)


module.exports = router;