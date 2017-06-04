import React from 'react';
import { connect } from 'react-redux';
import { showModal } from 'redux-modal-container';
import SimpleModal from '../components/simple-modal';


class Login extends React.Component {

  submit = () => {
    const { triggerModal } = this.props;
    triggerModal('login-modal', SimpleModal);
  };

  render() {
    return (
      <div>
        <h2>Login page</h2>
        <div>
          <form>
            <div>
              <label>Username: </label>
              <input type="text" name="username"/>
            </div>
            <div>
              <label>Password: </label>
              <input type="text" name="username"/>
            </div>
            <button type="button" onClick={this.submit}>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    triggerModal: (name, component, params = {}) => dispatch(showModal(name, component, params)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
