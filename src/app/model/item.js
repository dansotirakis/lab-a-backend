const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  title:{type: String, required: true},
  quantity:{type: Number, required: true}
},{ timestamps: true });

module.exports = mongoose.model("item", ItemSchema);