// C:\react-js\myreactdev\src\App.js

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from 'C:/React-js\\myreactdev\\src\\components\\Login.js';
import Header from './components/Header';
import Profile from './components/Profile';
import useToken from './components/useToken';

function App() {
  const { token, removeToken, setToken } = useToken();

  return (
    <div className="vh-100 gradient-custom">
      <div className="container">
        <h1 className="page-header text-center">
          React-JS and Python Flask Login Token Authentication flask_jwt_extended with Profile | SQLAlchemy.
        </h1>

        <BrowserRouter>
          <Header token={removeToken} />
          {!token && token !== "" && token !== undefined ? (
            <Login setToken={setToken} />
          ) : (
            <>
              <Routes>
                <Route
                  exact
                  path="/profile"
                  element={<Profile token={token} setToken={setToken} />}
                ></Route>
              </Routes>
            </>
          )}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
