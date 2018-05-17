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

    },
    subCategory: {

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
    isRegular: {

    },
    regularTiming: {

    },
    specificTiming: {

    },
    pricing: {

    },
    coverImage: {

    },
    supplementaryImages: {
      type: 'array'
    },
    location: {

    },
    scenario1: {

    },
    scenario2: {

    },
    scenario3: {

    },
    eventQuestions: {

    }
  }
};

