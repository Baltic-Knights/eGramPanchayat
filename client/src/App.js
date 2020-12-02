import React, { useEffect } from 'react';
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
import Loginpage from './components/loginPage';
import PaymentReceipt from './components/payment receipt/PaymentReceipt'
import Footer from './components/Headers & footers/footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserAction } from '../src/Redux/actions/getUserAction';
import Residence from './components/Residence/Residence';
import Revenue from './components/Revenue tax/Revenue';
import AdHome from './components/admin center/pages/adHome';
import AdRevenue from './components/admin center/pages/adRevenue';
import AdRevenueReceipt from './components/admin center/pages/adRevenueReceipt';
import AdSchemes from './components/admin center/pages/adSchemes';
import AdVillage from './components/admin center/pages/adVillage';
import AdResidence from './components/admin center/pages/adResidence';
import ReactNotification from 'react-notifications-component';

function App(props) {
  useEffect(() => {
    props.fetch_user()
  }, [])
  return (
    <>
      <BrowserRouter>
      <ReactNotification />
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
          <Route path="/adHome" component={AdHome}></Route>
          <Route path="/adRevenue" component={AdRevenue}></Route>
          <Route path="/adRevenueReceipt" component={AdRevenueReceipt}></Route>
          <Route path="/adSchemes" component={AdSchemes}></Route>
          <Route path="/adVillage" component={AdVillage}></Route>
          <Route path="/adResidence" component={AdResidence}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>

    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_user: () => { dispatch(getUserAction()) }
  }
}
export default connect(null, mapDispatchToProps)(App);
