const {ObjectID} = require ('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove

Todo.findOneAndRemove({})
Todo.findByIdAndRemove('5977bb28ef335db140d4c27b').then((todo) => {
  console.log('here is todo deleted: ', todo);
});
