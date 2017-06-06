import React from 'react';
import { Container as ModalContainer } from 'redux-modal-container';
import Login from './login';
import Register from './register';
import constants from '../constants';
import SimpleModal from '../components/simple-modal';
import SimpleModalRegister from '../components/simple-modal-register';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <div>
    <h1>Redux-Modal-Container Example</h1>
    <ModalContainer modals={{
      [constants.LOGIN_MODAL]: SimpleModal,
      [constants.REGISTER_MODAL]: SimpleModalRegister,
    }} />
    <Login />
    <Register />
  </div>
);

export default App;
