// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('596c018024d801a7bcb5662f')
  }, {
    $set: {
      name:'Matt'
    },
    $inc: {
      age:1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });




  // db.close();
});
