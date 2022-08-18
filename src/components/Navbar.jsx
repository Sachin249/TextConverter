import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    {/* <a className="navbar-brand" to="/">{props.title}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
          {/* <a className="nav-link" aria-current="page" to="/">Home</a> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
          {/* <a className="nav-link" to="/about">{props.about}</a> */}
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'#2C3E50':'light'}`}>
        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
      </div>
    </div>
  </div>
</nav>
  );
}
export default Navbar;
Navbar.propTypes ={title:PropTypes.string.isRequired,
                   about:PropTypes.string.isRequired
}
Navbar.defaultProps={
  title:"Set Title Here",
  about:"Aboutus"
}