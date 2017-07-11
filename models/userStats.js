var mongoose = require('mongoose'),
Schema = mongoose.Schema;

let userStatsSchema = new Schema({
  trackedStatValue: String,
  activityID: String,
  userID: String,
  created_at: Date,
  updated_at: Date
});

mongoose.model('userStats', userStatsSchema);
