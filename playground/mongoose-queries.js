'use strict';
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '5a4c0046f69e59641ec38ff6';
// const id = '5a4c0046f69e59641ec38ff611';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     console.log('ID not found');
//     return;
//   }
//   console.log('Todo By ID: ', todo);
// }).catch((err) => {
//   console.log(err);
// })

const userId = '5a4ab8e92926ca0012cee74b';

User.findById(userId).then((user) => {
  if (!user) {
    console.log('User ID not found');
    return;
  }

  console.log("User by ID: ", user);
}).catch((err) => {
  console.log(err);
});
