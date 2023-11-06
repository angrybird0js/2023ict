// passport 사용하지 않기로 함
var { User } = require('../models/usermodel');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(

  function(username, password, done) {

    // DB 연결
    User.findOne({ username: usrId }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Username Incorrect' })
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Password Incorrect' });
      }
      return done(null, user) // 유효한 사용자 반환
    })
  }
))

// passport가 세션을 이용하게 해야한다.
// passport.serializeUser()
// passport.deserializeUser()
//
//
