const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const Users = new Schema({
  name: String,
  mobile_number: String,
  last_name: String,
  age: Number
});

module.exports = mongoose.model('User', userSchema)