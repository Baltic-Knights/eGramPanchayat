import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Header from './components/header';
import Home from './components/Home';
import Schemes from './components/Schemes';
import Payment from './components/Payment';
import About from './components/About';
import Village from './components/Village';
import Loginpage from './components/login';
import Footer from './components/footer';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
function App() {
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

export default App;
