// Import modules
const router = require('express').Router();
const { Workout, Community, User } = require('../models');
const withAuth = require('../utils/auth');

// localhost:3001/
router.get('/', (req, res) => {
    res.render('homepage');
});

// localhost:3001/login
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/exercise');
    //   return;
    // }
    res.render('login');
  });

// localhost:3001/community
router.get('/community', async (req, res) => {
    try {
      // Get all communities 
      const communityData= await Community.findAll({

      });
      console.log(communities)

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