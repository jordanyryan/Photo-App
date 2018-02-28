import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a href="#" className="navbar-brand">Photo App</a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#nav-navbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav-navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="about.html" className="nav-link">About Us</a></li>
              <li className="nav-item"><a href="services.html" className="nav-link">Services</a></li>
              <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
              <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;