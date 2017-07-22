const {ObjectID} = require ('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = '596eb28a62698a09bd5cc5d8';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// User.find({
//   _id: id
// }).then((users)=> {
//   console.log('users', users);
// });
//
// User.findOne({
//   _id: id
// }).then((todo)=> {
//   console.log('Todo', todo);
// });


User.findById(id).then((user)=> {
  if (!user){
    return console.log('Id not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
