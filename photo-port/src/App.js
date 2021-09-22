import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import { validateEmail } from './utils/helpers';

import github from './assets/css/github.svg';
import linkedin from './assets/css/linkedin.svg';

import Sun from '../../assets/images/Sun.jpg';
import SMC21 from '../../assets/images/SMC21.jpg';
import Fam from '../../assets/images/Fam.jpg';
import Shop from '../../assests/images/Shop.jpg'

export default function App() {
  return (
    <Router>
      <header>
        <h1><Link to="/about" className="center light grey">Sean Conway</Link></h1>
        <nav>
            <ul className="nav justify-content-center nav-fill brown">
                <li className="nav-item">
                <Link to="/works" className= "brown"> Works</Link>
                </li>
                <li className="nav-item">
                <Link to="/contact" className= "brown">Contact</Link>
                </li>
                <li className="nav-item">
                <Link to="/resume" className= "brown">Resume</Link>
                </li>
              </ul>
        </nav>
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
    <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/contact">
      <ContactForm />
    </Route>
    <Route exact path="/works">
      <Works />
    </Route>
  </Switch>
    </Router>

    
  );
}

function Works() {
  return ( 
    <div className="flex">

<div className="card space-between" style={{width: '18rem'}}>
  <img src={discover} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Discover</h5>
    <p className="card-text">Discover erases job hunting stress by offering hundreds of job opportunities personalized to your needs!</p>
  </div>
  <div className="card-body">
    <a href="https://cryptic-taiga-26271.herokuapp.com/" className="card-link">Deployed App</a>
    <a href="https://github.com/EricaBabb/discover-job-search" className="card-link">Github</a>
  </div>
</div>

<div className="card space-between" style={{width: '18rem'}}>
  <img src={Interstellar-Wellness} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Interstellar Wellness</h5>
    <p className="card-text">Need a little me-time in your life? Inspirational Wellness prioritizes mental health and drives to spark inspiration in all aspects.</p>
  </div>
  <div className="card-body">
    <a href="https://seanway28.github.io/InterstellarWellness/" className="card-link">Deployed App</a>
    <a href="https://github.com/seanway28/InterstellarWellness" className="card-link">Github</a>
  </div>
</div>













// import React, { useState } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from "components/Header";
// import About from './components/About';
// import ContactForm from './components/Contact';
// import Resume from './components/Resume';
// import Portfolio from './components/Portfolio';
// import Footer from './components/Footer';


// function App () {
//   const [currentTab, SetCurrentTab] = useState('About');
//   const renderPage = () => {
//     switch (currentTab) {
//       case 'About' : return <About />;
//       case 'Portfolio' : return <Portfolio />;
//       case 'Contact' : return <Contact />;
//       case 'Résumé' : return <Resume />;
//       default : return <About />;
//     }
//   };

//   return (
//     <div className="App">
//       <Header currentTab={currentTab} SetCurrentTab={SetCurrentTab} />
//       <div className="mb-5">
//         <main className='d-flex justify-content-around text-center'>{renderPage()}</main>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;