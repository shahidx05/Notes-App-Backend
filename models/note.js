const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shahidx05:2005%40Shahid@cluster0.rrnfc1t.mongodb.net/notes?retryWrites=true&w=majority')
const noteSchema = new mongoose.Schema(
  {
    title: String,
    content: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
