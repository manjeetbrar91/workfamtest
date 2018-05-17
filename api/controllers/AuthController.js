module.exports = {
  signUp : (req,res)=>{
    console.log("CP => 1");
    if (!req.body.email || !req.body.password || !req.body.fullName) return res.ok(null,'All fields required!','FAILED');
    BusinessUser.findOne({email: req.body.email})
      .then(businessUser=>{
        if (businessUser) return res.ok(null, "User_Already_Exist", 'FAILED');
        // return res.ok(null, "OK", 'OK');
        Business.findOne({businessName: req.body.businessName})
          .then(business=>{
            console.log("CP => 2");
            if (business) {
              req.body.businessId = business.id;
              BusinessUser.create(req.body)
                .then(business=>{
                  console.log("CP => 3");
                  return res.ok(null, 'Account_Created', 'OK');
                })
            } else {
              Business.create({businessName: req.body.businessName,city: req.body.city})
                .then(business=>{
                  console.log("CP => 4");
                  req.body.businessId = business.id;
                  BusinessUser.create(req.body)
                    .then(businessUser=>{
                      console.log("CP => 5");
                      return res.ok(null, 'Account_Created', 'OK');
                    })
                })
            }
          })
      }).catch(error=>{
        sails.log.error(error);
        return res.ok(null, "Internal Server Error", 'UNKNOWN_ERROR');
    })
  },
  login: (req,res)=>{
    console.log('RUN');
    BusinessUser.findOne({email: req.body.email})
      .then(businessUser=>{
        if (!businessUser) return res.ok(null, 'User_Not_Found', 'FAILED');
        BusinessUser.compare(req.body.password, businessUser, (error,match)=>{
          if (match) {
            businessUser.token = 'DAS '+jwtService.issue({id: businessUser.id,businessId: businessUser.businessId});
            return res.ok(businessUser, 'SUCCESS', 'OK');
          } else  {
            return rtes.ok(null, 'Invalid_Password', 'FAILED');
          }
        });
      });
  }


  // signUp: (req, res) => {
  //   console.log('Signing Up');
  //   console.log(req.body)
  //   Company.findOne({domain: req.body.company.domain})
  //     .then(company => {
  //       if (company) req.body.company = company.id;
  //       var temp = req.body.email.split('@');
  //       req.body.company.domain = temp[1];
  //       User.findOne({email: req.body.email})
  //         .then(user=>{
  //           if(user) return res.ok(null, 'Account with given email already exist','FAIL');
  //           User.create(req.body)
  //             .then(user => {
  //               user.token = JwtService.issue({id: user.id});
  //               return res.ok(user, 'Account Created');
  //             }).catch(error => {
  //             sails.log.error(error);
  //             return res.ok(error, 'Error while creating Account','FAIL');
  //           })
  //         })
  //     })
  // },
  // login: (req,res)=>{
  //   User.findOne({email: req.body.email})
  //     .then(user=>{
  //       if(!user) return res.ok('User Not Found','User Does Not Exist','FAIL');
  //       User.comparePassword(req.body.password, user)
  //         .then(match=>{
  //           if(match){
  //             user.token = JwtService.issue({id: user.id})
  //             res.ok(user,'Login Successful')
  //           }else{
  //             res.ok("Password does not match",'Invalid Password','FAIL')
  //           }
  //         }).catch(error=>{
  //           res.ok("Password does not match",'Invalid Password','FAIL')
  //       })
  //     }).catch(error=>{
  //       res.badRequest("Unable To Fetch User")
  //   })
  // },

};
