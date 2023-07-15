// Import modules
const router = require('express').Router();
const { Workout, User } = require('../models');
const withAuth = require('../utils/auth');

// const { Community } = require('../models');

// const router = require('express').Router();

// localhost:3001/
router.get('/', (req, res) => {
    res.render('homepage');
})

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/exercise');
      return;
    }
    res.render('login');
  });

router.get('/community', async (req, res) => {
    try {
      // Get all communities 
      const communityData= await Community.findAll({

      });
      // console.log(communities)

      const communityMap = communityData.map((community) => community.get({ plain: true }));
      console.log(communityData)
      // Pass serialized data and session flag into template
      res.render('community', { 
       communityMap
      });
    } catch (err) {
        console.log(err)
      res.status(500).json(err);
      
    }
  });

module.exports = router;