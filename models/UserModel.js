const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let User = new Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
},
    { collection: "users" }
);

module.exports = mongoose.model('users', User);


