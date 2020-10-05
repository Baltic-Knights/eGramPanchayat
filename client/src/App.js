import React,{useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Header from './components/Headers & footers/header';
import Home from './components/Home/Home';
import Schemes from './components/Schemes';
import Payment from './components/Payment';
import About from './components/About';
import Village from './components/Village';
import Loginpage from './components/login';
import Footer from './components/Headers & footers/footer';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserAction} from './actions/getUserAction';

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
