import express from "express";
import { config } from "../configs/const";
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section willsend hello to ui
recordRoutes.route("/").get(function (req, res) {
  res.send("Hello Joshi!");
});

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  const db_connect = dbo.getDb(config.dbName);
  db_connect
    .collection(config.collectionName)
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  const db_connect = dbo.getDb();
  const myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection(config.collectionName)
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
  const db_connect = dbo.getDb();
  const myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect
    .collection(config.collectionName)
    .insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  const db_connect = dbo.getDb();
  const myquery = { _id: ObjectId(req.params.id) };
  const newvalues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect
    .collection(config.collectionName)
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  const db_connect = dbo.getDb();
  const myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection(config.collectionName)
    .deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
});

module.exports = recordRoutes;
