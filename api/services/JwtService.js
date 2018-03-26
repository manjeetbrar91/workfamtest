var jwt = require('jsonwebtoken');
var Secrets = require('./../../config/secrets')

module.exports = {
  issue: payload=>{
    return jwt.sign(payload,Secrets.jwtSecret,{expiresIn: 60*60} )
  },
  verify: (token,callback)=>{
    return jwt.verify(token,Secrets.jwtSecret,callback);
  }
}
