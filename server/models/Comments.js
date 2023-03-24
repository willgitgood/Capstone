const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  affirmation: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;
