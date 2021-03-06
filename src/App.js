import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Purchase from './components/pages/Purchase';
import ProductDetail from './components/pages/ProductDetail';
import Footer from './components/Footer';
import Payment from './components/pages/Payment';
import PaymentSuccess from './components/pages/PaymentSuccess';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Purchase} />
        <Route path='/productDetail' exact component={ProductDetail} />
        <Route path='/payment' exact component={Payment}/>
        <Route path='/ordersuccess' exact component={PaymentSuccess}/>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
