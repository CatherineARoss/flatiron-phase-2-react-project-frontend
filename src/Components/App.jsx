import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';
import Home from './Home'; 
import About from './About'; 
import Cart from './Cart'; 
import '../styles.css';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Main />
      <Footer />
    </div>
  );
}

export default App;