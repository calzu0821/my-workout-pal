// Import modules
const router = require('express').Router();
const { Workout, Community, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', async (req, res) => {
    try {
      const workoutData = await Workout.findByPk(req.params.user_id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const workoutMap = workoutData.get({ plain: true });
  
      res.render('workout', {
        ...Workout,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  module.exports = router;