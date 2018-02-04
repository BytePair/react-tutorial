import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import HomePage from './Components/Pages/homePage';
import ProductsPage from './Components/Pages/productsPage';

// includes (css)
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
        
          <Header/>

            <Route exact path='/' component={HomePage} />
            <Route exact path='/products' component={ProductsPage} />

          <Footer/>

        </div>
      </Router>
    );
  }
}

export default App;
