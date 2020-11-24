import React,{useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Header from './components/Headers & footers/header';
import Home from './components/Home/Home';
import Schemes from './components/schemes/Schemes';
import Payment from './components/payment/Payment';
import Admin from './components/admin center/admin';
import About from './components/about us/about us';
import Village from './components/about village/About';
import Loginpage from './components/login';
import PaymentReceipt from './components/payment receipt/PaymentReceipt'
import Footer from './components/Headers & footers/footer';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserAction} from './actions/getUserAction';
import Residence from './components/Residence/Residence';
import Revenue from './components/Revenue tax/Revenue';
function App(props) {
  useEffect(()=>{
     props.fetch_user()
  },[])
  return (
    <>
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" component={Loginpage}></Route>
            <Route path="/schemes" component={Schemes}></Route>
            <Route path="/village" component={Village}></Route>
            <Route path="/payment" component={Payment}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/residence" component={Residence}></Route>
            <Route path="/revenue" component={Revenue}></Route>
            <Route path="/admin" component={Admin}></Route>
            <Route path="/payreceipt" component={PaymentReceipt}></Route>
        </Switch>
        <Footer/>
    </BrowserRouter>

    </>
  );
}

const mapDispatchToProps=(dispatch)=>{
      return{
        fetch_user:()=>{dispatch(getUserAction())}
      }
}
export default connect(null,mapDispatchToProps)(App);
