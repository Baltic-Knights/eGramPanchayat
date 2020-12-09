const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const passport=require('passport');
const keys = require('./config/keys');
const path=require('path');
const authRouter=require('./routes/authRouter')
const schemeRouter=require('./routes/schemeRouter')
const popRouter=require('./routes/popRouter')
const villagerRouter=require('./routes/villagerRoute')
const ResRouter=require('./routes/ResRouter')
const paymentRouter=require('./routes/paymentRouter')
const currComRouter=require('./routes/currCommitteeRouter.js')
const prevComRouter=require('./routes/prevCommitteeRouter.js')
const RevenueRouter=require('./routes/revenueRoute')
const litRouter=require('./routes/litRouter')
const cookieSession=require('cookie-session');


const PORT=process.env.PORT || 5000;
mongoose.connect("mongodb+srv://eGram:@TeamIAF@cluster0.jtyap.mongodb.net/eGramPanchayat?retryWrites=true&w=majority",
{ useNewUrlParser: true,
    useUnifiedTopology: true,
     useFindAndModify: true },()=>{
    console.log("Connected to DB");
});
app.use(cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[keys.COOKIEKEY]
}));

// const parseUrl = express.urlencoded({ extended: false });
// const parseJson = express.json({ extended: false });

app.use(cors());
app.use(passport.initialize());
app.use(express.json());
app.use(passport.session());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/public',express.static(path.join(__dirname,'schemeUploads')));
app.use('/public',express.static(path.join(__dirname,'residence')));
app.use('/public',express.static(path.join(__dirname,'/controller/applicants')));
app.use('/user',authRouter);
app.use('/populate',popRouter);
app.use('/literate',litRouter);
app.use('/residence',ResRouter);
app.use('/revenue',RevenueRouter);
app.use('/villager',villagerRouter);
app.use('/schemes',schemeRouter);
app.use('/currCommittee',currComRouter);
app.use('/prevCommittee',prevComRouter);
app.use('/pay',paymentRouter);
require('./models/userSchema');
require('./services/passport');
require('./routes/oAuthRouter')(app);
app.listen(PORT,()=>{
    console.log("Server connected successfully on "+PORT);
});