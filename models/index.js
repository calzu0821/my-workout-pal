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