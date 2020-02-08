
'use strict';

const mongoose = require('mongoose');
require('../products/products-schema.js');

const categories = mongoose.Schema({
  name: { type: String, required: true },
  display_name: { type: String, required: true },
  description: { type: String },
}, { toObject: { virtuals: true }, toJson: { virtuals: true } });
/**
 * virtual modleing for categories
 */
categories.virtual('productV', {
  ref: 'products',
  localField: 'name',
  foreignField: 'category',
  justOne: false,
});


/**
 * the (pre) hook method to invoke callback function 
 */


categories.pre('findOne', function () {
  try {
    this.populate('productV');
  } catch (err) {
    console.error(err);
  }
});

module.exports = mongoose.model('categories', categories);