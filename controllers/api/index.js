const router = require('express').Router();

const userRoutes = require('./userRoutes');
const exerciseRoutes = require('./exerciseRoutes');

// localhost:3001/api/user
router.use('/user', userRoutes);
router.use('/exercise', exerciseRoutes);

module.exports = router;