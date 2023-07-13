const router = require('express').Router();

// localhost:3001/
router.get('/', (req, res) => {

    res.render('homepage');
})

// localhost:3001/community
router.get('/community', (req, res) => {
    
    res.render('community');
})

module.exports = router;