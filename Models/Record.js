const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  createdAt    : {type: Date, unique:true},
  counts       : {type: Array},
  key          : {type: String, unique:true},
  value        : {type: String, unique:true},

}, {collection: "records", minimize: false});

mongoose.model('Record', RecordSchema)

module.exports = RecordSchema;
