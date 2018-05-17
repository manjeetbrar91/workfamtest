/**
 * Business.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    businessName: {
      type: 'string'
    },
    businessLocation: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    postalCode: {
      type: 'string'
    },
    country: {
      type: 'string'
    },
    businessWebsite: {
      type: 'string'
    },
    businessEmail: {
      type: 'string'
    },
    businessContact: {
      type: 'string'
    },
    createdBy: {
      model: 'BusinessUser'
    },
    updatedBy: {
      model: 'BusinessUser'
    }
  }
};

