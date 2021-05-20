import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
        </Switch>        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
