import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showModal } from 'redux-modal-container';
import constants from '../constants';

class Login extends React.Component {

  submit = () => {
    this.props.showModal(constants.LOGIN_MODAL);
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

export default connect(
  null,
  dispatch => bindActionCreators({ showModal }, dispatch),
)(Login);
