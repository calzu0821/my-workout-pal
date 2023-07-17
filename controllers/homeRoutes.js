// Import modules
const router = require('express').Router();
const { Workout, Community, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/exercise');
    } else {
        res.render('login');
    }
  });

// router.get('/exercise', (req, res) => {
//     res.render('exercise');
// });
router.get('/exercise', async (req, res) => {
  try {
    // Get all communities 
    const workoutData= await Workout.findAll({

    });
    console.log(workoutData)

    const workoutMap = workoutData.map((workout) => workout.get({ plain: true }));
    console.log(workoutData)
    // Pass serialized data and session flag into template
    res.render('exercise', { 
      workoutMap
    });
  } catch (err) {
      console.log(err)
    res.status(500).json(err);
       
  }
});

router.get('/community', async (req, res) => {
  try {
    // Get all communities 
    const communityData= await Community.findAll({

    });
    console.log(communityData)

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