import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showModal } from 'redux-modal-container';
import constants from '../constants';

class Register extends React.Component {
  submit = () => {
    this.props.showModal(constants.REGISTER_MODAL);
  };

  render() {
    return (
      <div>
        <h2>Register page</h2>
        <div>
          <form>
            <div>
              <label>Username: </label>
              <input type="text" name="username" />
            </div>
            <button type="button" onClick={this.submit}>Create</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, dispatch =>
  bindActionCreators({ showModal }, dispatch),
)(Register);
