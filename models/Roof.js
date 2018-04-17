const mongoose = require('mongoose');
const config = require('../config/database');

// Roof Schema
const Roofschema = mongoose.Schema ({
  Distance: {
    type: Number,
    required: true
  },
  Rate: {
    type: Number,
    required: true
  },
 ProjectSize: {
    type: Number,
    required: true
  },
  DateOfComplition: {
    type: Date,
     required: true
    
  }
});

const Roof = module.exports = mongoose.model('Roof', Roofschema);



module.exports.getRoofById = function(id, callback) {
  Roof.findById(id, callback);
}

module.exports.getRoofByDistance = function(Distance, callback) {
  const query = {Distance: Distance}
  Roof.findOne(query, callback);
}

module.exports.addRoof = function(newRoof, callback) {
      newRoof.save(callback);
}

