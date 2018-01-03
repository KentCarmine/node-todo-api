'use strict';
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// Todo.findOneAndRemove()

Todo.findByIdAndRemove('5a4d551f3c053178a28873f4').then((todo) => {
  console.log(todo);
});
