module.exports = (req,res,next)=>{
  var token;
  if (req.headers && req.headers.authorization) {
    var parts = req.headers.split(' ');
    if (parts.length != 2) return res.ok(null,"Token_Malfunctioned", 'Invalid_Request');
    var scheme = parts[0];
    var credentials = parts[1];
    jstService.verify(token, (error,user)=>{
      if (error) return res.forbidden("REQUEST_DENIED");
      BusinessUser.findOne({id: user.id})
        .then(businessUser=>{
          req.user = businessUser;
        })
    })
  } else  {
    return res.forbidden("Token_Missing");
  }
};
