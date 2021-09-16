import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './components/About';
import ContactForm from './components/Contact';

const Main = () => {
    return (
      <Switch>
      <Route exact path="/" component={About}>
        <About />
      </Route>
      <Route exact path="/contact" component={ContactForm}>
        <ContactForm />
      </Route>
    </Switch>
    );
  }
  
  export default Main;