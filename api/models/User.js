/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    company: {
      model: 'Company'
    },
    designation: {
      type: 'string',
      required: true
    },
    department: {
      type: 'string',
      required: true
    },
    contactNumber: {
      type: 'string',
    },
    maritalStatus: {
      type: 'string',
      enum: ['SINGLE', 'MARRIED']
    },
    toJSON() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },
  beforeCreate: (values, next) => {
    bcrypt.hash(values.password,10,(error,hash)=>{
      if(error){
        sails.log.error(error);
        next(false);
      }
      values.password = hash;
      next();
    })
  },
  comparePassword: (password,user)=>{
    return new Promise((resolve,reject)=>{
      bcrypt.compare(password,user.password,(error,match)=>{
        if(error) reject(error);
        if(match) resolve(true);
        else reject(false)
      })
    });
  }
};

