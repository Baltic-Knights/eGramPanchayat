const passport=require('passport');
const User=require('../models/userSchema');
module.exports=(app)=>{
    app.get('/auth/google',
  passport.authenticate('google', { scope: 
      [ 'https://www.googleapis.com/auth/plus.login',
      , 'https://www.googleapis.com/auth/plus.profile.emails.read' ] }
    ));
    app.get( '/auth/google/callback', 
    passport.authenticate( 'google'),(req,res)=>{
      res.redirect("http://localhost:3000/")
    });

    app.get('/api/current_user',(req,res)=>{
        res.send(req.user);
    });
    app.get('/api/logout',(req,res)=>{
      req.logout();
      res.redirect("http://localhost:3000/")
    })
}
