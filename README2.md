//MongoDB: myStatTracker

//collections: users, activities, stats

users:
//firstName
//lastName
//username
//password
//_id
//created_at
//updated_at

activities:
//activityName
//trackedHow
//userID
//_id
//created_at
//updated_at

userStats:
//activityID
//userID
//trackedStatValue
//_id
//created_at
//updated_at

//res.render vs. res.send:
1)router.get('/reports', function(req,res){
   var data = JSON_OBJECT;
   res.render('path-to-view-file', data);
});

2)router.get('/reports/json', function(req,res){
   var data = JSON_OBJECT;
   res.send(data);
});
