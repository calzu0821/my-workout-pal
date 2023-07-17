// Import modules
const router = require('express').Router();
const { Workout, Community, User } = require('../models');
const withAuth = require('../utils/auth');



  router.get('/:id', async (req, res) => {
    try {
        const workoutData= await Workout.findAll({
            where: {
              id: req.params.id,
              user_id: req.session.id,
            },
        });

        console.log(workoutData)
  
        const workoutMap = workoutData.map((workout) => workout.get({ plain: true }));
        console.log(workoutData)
        // Pass serialized data and session flag into template
        res.render('exercise', { 
          workoutMap, logged_in: req.session.logged_in
        });
      } catch (err) {
          console.log(err)
        res.status(500).json(err);
           
      }
  });

  module.exports = router;