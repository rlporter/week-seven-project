const express = require('express');
const app = express();


//GET	/activities	Show a list of all activities I am tracking, and links to their individual pages
router.get('api/activities', authMiddleware, function(req, res){
  res.render('..models/homepage', activities);
});
//POST	/activities	Create a new activity for me to track.
router.post('api/activities', authMiddleware, function(req, res){
  res.render('..models/newActivity', activities);
});

//GET	/activities/{id}	Show information about one activity I am tracking, and give me the data I have recorded for that activity.

//PUT	/activities/{id}	Update one activity I am tracking, changing attributes such as name or type. Does not allow for changing tracked data.

//DELETE	/activities/{id}	Delete one activity I am tracking. This should remove tracked data for that activity as well.

//POST	/activities/{id}/stats	Add tracked data for a day. The data sent with this should include the day tracked. You can also override the data for a day already recorded.

//DELETE	/stats/{id}	Remove tracked data for a day.

module.exports = Router;