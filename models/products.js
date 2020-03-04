const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  productname : String,
  price : Number
})

module.exports = mongoose.model('dbProduct', productSchema);
