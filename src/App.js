import React from 'react'
import './App.css'
import Product from './components/product/product'
import Headbar from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Product_buy_now from './components/buy-now/product-buy-now';
import Fetchdata  from './components/api/api';


class App extends React.Component {
  

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path='/' exact>
              <Headbar />
              <Product />
            </Route>
            <Route path='/main-page' exact>
              <Headbar />
              <Product_buy_now />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }

}

export default App;
