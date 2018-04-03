module.exports = {
  signUp: (req, res) => {
    console.log('Signing Up');
    console.log(req.body)
    Company.findOne({domain: req.body.company.domain})
      .then(company => {
        if (company) req.body.company = company.id;
        var temp = req.body.email.split('@');
        req.body.company.domain = temp[1];
        User.findOne({email: req.body.email})
          .then(user=>{
            if(user) return res.ok(null, 'Account with given email already exist','FAIL');
            User.create(req.body)
              .then(user => {
                user.token = JwtService.issue({id: user.id});
                return res.ok(user, 'Account Created');
              }).catch(error => {
              sails.log.error(error);
              return res.ok(error, 'Error while creating Account','FAIL');
            })
          })
      })
  },
  login: (req,res)=>{
    User.findOne({email: req.body.email})
      .then(user=>{
        if(!user) return res.ok('User Not Found','User Does Not Exist','FAIL');
        User.comparePassword(req.body.password, user)
          .then(match=>{
            if(match){
              user.token = JwtService.issue({id: user.id})
              res.ok(user,'Login Successful')
            }else{
              res.ok("Password does not match",'Invalid Password','FAIL')
            }
          }).catch(error=>{
            res.ok("Password does not match",'Invalid Password','FAIL')
        })
      }).catch(error=>{
        res.badRequest("Unable To Fetch User")
    })
  }
};
