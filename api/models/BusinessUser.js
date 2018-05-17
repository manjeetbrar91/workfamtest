/**
 * BusinessUser.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');
module.exports = {

  attributes: {
    businessId: {
      model: 'Business'
    },
    fullName: {
      type: 'string',
      required: true
    },
    userName: {
      type: 'string'
    },
    email:{
      type: 'string',
      required: true
    },
    userType: {
      type: 'string'
    },
    password: {
      type: 'string',
      required: true
    },
    userStatus: {
      type: 'string'
    },
    profileImage: {
      type: 'string'
    },
    createdBy: {
      model: 'BusinessUser'
    },
    updatedBy: {
      model: 'BusinessUser'
    },
    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },
  beforeCreate: (values,next)=>{
    bcrypt.genSalt(10,(error,salt)=>{
      if(error) return next(error);
      bcrypt.hash(values.password, salt, (error, hash)=>{
        if(error) return next(error);
        values.password = hash;
        next();
      })
    })
  },
  compare: (password,user,cb)=>{
    bcrypt.compare(password,user.password,(error,match)=>{
      if(error) return cb(error);
      if(match) return cb(null, true);
      cb(error);
    })
  }
};

