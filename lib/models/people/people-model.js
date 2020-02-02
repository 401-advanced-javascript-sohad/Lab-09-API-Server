'use strict';

const DataModel = require('../memory.js');

class People extends DataModel {

  schema() {
    return {
      id: { required: true, type: 'string' },
      firstName: { required: true, type: 'string' },
      lastName: { required: true, type: 'string' },
      age: { required: true, type: 'number' },
    };
  }

  static sampleRecord() {
    return {
      'firstName': 'sohad',
      'lastName': 'qtaitat',
      'age': 24,
    };
  }

}

module.exports = People;