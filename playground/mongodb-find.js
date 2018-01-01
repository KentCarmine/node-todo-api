'use strict';

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log("Error connecting to MongoDB server.", err);
    return;
  }
  console.log("Connected to MongoDB server.");

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a4aa1606164081a8285a47f')
  // }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch Todos", err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log("Todos count: " + count);
  // }, (err) => {
  //   console.log("Unable to fetch Todos", err);
  // });

  db.collection('Users').find({
    name: "Bob"
  }).toArray().then((docs) => {
    console.log("Users");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch Todos", err);
  });

  // db.close();
});
