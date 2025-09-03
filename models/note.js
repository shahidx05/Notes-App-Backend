const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI);
const noteSchema = new mongoose.Schema(
  {
    title: String,
    content: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
