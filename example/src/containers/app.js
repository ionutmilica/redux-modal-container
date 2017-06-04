import React from 'react';
import { Container as ModalContainer } from 'redux-modal-container';
import Login from './login';
import Register from './register';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <div>
    <h1>Redux-Modal-Container Example</h1>
    <ModalContainer />
    <Login />
    <Register />
  </div>
);

export default App;
