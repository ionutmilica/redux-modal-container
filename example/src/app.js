import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container as ModalContainer, showModal } from 'redux-modal-container';
import constants from './constants';
import SimpleModal from './components/simple-modal';
import SimpleModalRegister from './components/simple-modal-register';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  modalInvoker = name => () => this.props.showModal(name);

  render() {
    return (
      <div>
        <h1>Redux-Modal-Container Example</h1>
        <ModalContainer
          modals={{
            [constants.LOGIN_MODAL]: SimpleModal,
            [constants.REGISTER_MODAL]: SimpleModalRegister,
          }}
        />
        <div>
          <button type="button" onClick={this.modalInvoker(constants.LOGIN_MODAL)}>
            Login modal
          </button>
          <button type="button" onClick={this.modalInvoker(constants.REGISTER_MODAL)}>
            Register modal
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ showModal }, dispatch);

export default connect(null, mapDispatchToProps)(App);
