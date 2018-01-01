'use strict';

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log("Error connecting to MongoDB server.", err);
    return;
  }
  console.log("Connected to MongoDB server.");

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a4aa78a6164081a8285a56d')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a4572d7a114061a48542282')
  }, {
    $set: {
      name: "Alice"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  // db.close();
});
