const User = require('./User.js');
const Community = require('./Community.js');
const Workout = require('./Workout.js');

User.hasMany(Workout, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Workout.belongsTo(User, {
    foreignKey: 'user_id'
  });


module.exports = { User, Workout, Community };


<<<<<<< HEAD
=======
module.exports = { User, Workout, Community };
>>>>>>> 3dea5719fd386bb356ebe0b3414c8da3d5b3fc80
