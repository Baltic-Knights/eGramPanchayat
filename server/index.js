const express=require('express');
const app=express();
const mongoose=require('mongoose');
const passport=require('passport');
const keys = require('./config/keys');
const authRouter=require('./routes/authRouter')
const cookieSession=require('cookie-session');
const PORT=process.env.PORT || 5000;
mongoose.connect("mongodb+srv://eGram:@TeamIAF@cluster0.jtyap.mongodb.net/eGramPanchayat?retryWrites=true&w=majority",
{ useNewUrlParser: true,
    useUnifiedTopology: true },()=>{
    console.log("Connected to DB");
});
app.use(cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[keys.COOKIEKEY]
}));
app.use(passport.initialize());
app.use(express.json());
app.use(passport.session());
app.use('/user',authRouter);
require('./models/userSchema');
require('./services/passport');
require('./routes/oAuthRouter')(app);
app.listen(PORT,()=>{
    console.log("Server connected successfully on "+PORT);
});