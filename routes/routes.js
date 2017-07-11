const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));

//GET	/activities	Show a list of all activities I am tracking, and links to their individual pages
let users = mongoose.model('users');
let activities = mongoose.model('activities');
let userStats = mongoose.model('userStats');

router.get('api/activities', authMiddleware, function(req, res){
  users.activities.find({}, function(err, results){
    res.render('..views/activities', activities);
  });
});

//POST	/activities	Create a new activity for me to track.
router.post('api/activities', authMiddleware, function(req, res){
  users.activities.create({
    activityName: String,
    trackedHow: String,
    userID: String,
    created_at: Date(now),
  }, function(err,results){
  res.render('..models/activities', activities);
  })
});

let id = req.params.id;

//GET	/activities/{id}	Show information about one activity I am tracking, and give me the data I have recorded for that activity.
router.get('api/activities/_id', authMiddleware, function(req, res){
  activities.findOne({id: '_id'},function(err, result){
  res.json({userStats});
})
});
//PUT	/activities/{id}	Update one activity I am tracking, changing attributes such as name or type. Does not allow for changing tracked data.

router.put('api/activities/_id', authMiddleware, function(req, res){
  activities.findOne.update({
    id: '_id',
    activityName: String,
    trackedHow: String
  },function(err, result){
    res.render('..models/activities', activities);
  })

});
//DELETE	/activities/{id}	Delete one activity I am tracking. This should remove tracked data for that activity as well.
router.delete('api/activities/_id', authMiddleware, function(req, res){
    activity.remove({id: '_id'},function(result) {
      return res.json(result);
      res.redirect('/activities', activities);
  });
})
//POST	/activities/{id}/stats	Add tracked data for a day. The data sent with this should include the day tracked. You can also override the data for a day already recorded.
router.post('api/activities/_id', authMiddleware, function(req, res){
      activities.userStats.create({
      id: '_id',
      trackedStatValue: String,
      updated_at: Date(now)
    }, function(err, results){
      res.render('..models/activities', activities);
  });
})

//DELETE	/stats/{id}	Remove tracked data for a day.
router.delete('api/stats/_id', authMiddleware, function(req, res){
  userStats.remove({id: '_id'}, function(result){
    return res.json(result);
    res.redirect('/activities', activities);
});
});

module.exports = Router;
