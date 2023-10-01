import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home'; 
import About from './About'; 
import Cart from './Cart'; 
import '../styles.css';

function App() {
  const [listings, setListings] = useState([]);

  const addListing = (newListing) => {
    setListings(prevListings => [...prevListings, newListing]);
  };
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={Home} />
      </Switch> 
      <Footer addListing={addListing}/>
    </div>
  );
}

export default App;