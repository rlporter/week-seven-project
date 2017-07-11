var mongoose = require('mongoose'),
Schema = mongoose.Schema;

let activitiesSchema = new Schema({
  activityName: String,
  trackedHow: String,
  userID: String,
  created_at: Date,
  updated_at: Date
});

mongoose.model('activities', activitiesSchema);
