import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Header(props) {
  const navigate = useNavigate();

  const logMeOut = async () => {
    try {
      await axios({
        method: 'POST',
        url: 'http://127.0.0.1:5000/logout',
      });
      props.token();
      localStorage.removeItem('email');
      navigate('/');
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  };

  const logged = localStorage.getItem('email');

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="myreactdev\public\logo192.png">Unlimiteddemi</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="myreactdev\public\logo192.png">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="myreactdev\public\logo192.png">About</a>
            </li>
          </ul>
          {!logged ? (
            <button className="btn btn-outline-success">Login</button>
          ) : (
            <button className="btn btn-outline-danger" onClick={logMeOut}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
