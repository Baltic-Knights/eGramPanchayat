const passport=require("passport");
const GoogleStrategy=require('passport-google-oauth2');
const keys=require('../config/keys')
const mongoose=require('mongoose');
const User=require('../models/userSchema');

passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    });
})
passport.use(new GoogleStrategy({
    clientID:keys.GoogleClientID,
    clientSecret:keys.GoogleClientSecret,
    callbackURL:"http://localhost:5000/auth/google/callback",
     passReqToCallback   : true
},
(request, accessToken, refreshToken, profile, done)=>{
    console.log(profile);
    User.findOne({googleId:profile.id})
    .then((exist)=>{
        if(exist){
            done(null,exist);
        }else{
           new User({
               googleId:profile.id,
               username:profile.displayName,
               picture:profile.picture
            }).save()
           .then((user)=>{
            done(null,user);
           });
        }
    });
 })
);