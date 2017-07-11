var mongoose = require('mongoose'),
Schema = mongoose.Schema;

let usersSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  created_at: Date,
  updated_at: Date
});

mongoose.model('users', usersSchema);
