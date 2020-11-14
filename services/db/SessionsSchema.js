const mongoose = require("mongoose");
const { Schema } = mongoose;

const SessionSchema = new Schema({
  expires: {
    type: Date,
    required: true,
  },
  lastModified: {
    type: Date,
    required: true,
  },
  "": {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("sessions", SessionSchema);
