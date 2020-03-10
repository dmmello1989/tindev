const { Schema, model } = require("mongoose");

const DevSchema = new Schema({
<<<<<<< HEAD
    name: {
        type: String,
        required: true
    }, 
    user: {
        type: String,
        required: true
    },
    bio: String,
    avatar: {
        type: String,
        required:  true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "Dev"
    }],
    dislikes: [],
}, {
    timestamps: true
=======
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true
  },
  bio: String,
  avatar: {
    type: String,
    required: true
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: "Dev"
  }],
  dislikes: [{
    type: Schema.Types.ObjectId,
    ref: "Dev"
  }],
}, {
  timestamps: true
>>>>>>> a388ce966877eb0e28602a35284aa4323771aa3a
});

module.exports = model("Dev", DevSchema);