import React from 'react';
import github from '../../assets/css/github.svg';
import linkedin from '../../assets/css/linkedin.svg';


const Footer = () => {

  return (
    <footer>
        <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/seanway28"><img className= "icon" src={github} alt=""/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/sean-conway-132069137/"><img className= "icon" src={linkedin} alt=""/></a>
            </li>
        
          </ul>
    </footer>
  );
};

export default Footer;