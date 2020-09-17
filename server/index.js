const express=require('express');
const app=express();
const mongoose=require('mongoose');
const passport=require('passport');
const keys = require('./config/keys');
const cookieSession=require('cookie-session');
const PORT=process.env.PORT || 5000;
mongoose.connect("mongodb+srv://Rohit:Rohit123@cluster0.pqyei.mongodb.net/user?retryWrites=true&w=majority",
{ useNewUrlParser: true },()=>{
    console.log("Connected to DB");
});
app.use(cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[keys.COOKIEKEY]
}));
app.use(passport.initialize());
app.use(passport.session());
require('./models/userSchema');
require('./services/passport');
require('./routes/authRouter')(app);
app.listen(PORT,()=>{
    console.log("Server connected successfully on "+PORT);
});