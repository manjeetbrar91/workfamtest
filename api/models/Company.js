/**
 * Company.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    domain: {
      type: 'string',
      required: true
    },
    registeredOn: {
      type: 'datetime'
    },
    addressLine1: {
      type: 'string'
    },
    addressLine2: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    postalCode: {
      type: 'string'
    },
    country: {
      type: 'string'
    },
    hrManager: {
      model: 'User'
    },
    // plan: {
    //   type: 'string'
    // },
  }
};
