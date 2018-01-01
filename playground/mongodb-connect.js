'use strict';

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log("Error connecting to MongoDB server.", err);
    return;
  }
  console.log("Connected to MongoDB server.");

  // db.collection('Todos').insertOne({
  //   text: "Something to do",
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     console.log("Error inserting Todo", err);
  //     return;
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: "Bob",
  //   age: 40,
  //   location: "New York"
  // }, (err, result) => {
  //   if (err) {
  //     console.log("Error inserting User", err);
  //     return;
  //   }
  //
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});
