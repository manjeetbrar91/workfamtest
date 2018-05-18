/**
 * Activity.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    businessId: {
      model: 'Business'
    },
    createdBy: {
      model: 'BusinessUser'
    },
    updatedBy: {
      model: 'BusinessUser'
    },
    title: {
      type: 'string'
    },
    category: {
      model: 'Category'
    },
    subCategory: {
      model: 'SubCategory'
    },
    eventType: {
      type: 'string',
      enum: ["EXPERIENCE","EVENT","OFFER"]
    },
    description: {
      type: 'string'
    },
    fromDate: {
      type : 'datetime'
    },
    toDate: {
      type: 'datetime'
    },
    requirement: {
      type: 'boolean',
      defaultsTo: false
    },
    min: {
      type: 'string'
    },
    max: {
      type: 'string'
    },
    isRegular: {
      type: 'boolean'
    },
    regularTiming: {
      type: 'json'
    },
    specificTiming: {
      type: 'json'
    },
    pricing: {
      type: 'json'
    },
    coverImage: {
      model: 'Media'
    },
    supplementaryImages: {
      type: 'array'
    },
    location: {
      type: 'json'
    },
    scenario1: {
      type: 'string'
    },
    scenario2: {
      type: 'string'
    },
    scenario3: {
      type: 'string'
    },
    eventQuestions: {
      type: 'json'
    }
  }
};

