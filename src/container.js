import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as modalActionCreators from './actions';

class ModalContainer extends React.Component {

  render() {
    const { currentModal, showModal, hideModal } = this.props;

    if (!currentModal) {
      return null;
    }

    const { component: Component, id, props } = currentModal;

    return (
      <Component
        {...props}
        hideModal={() => hideModal(id)}
        showModal={showModal}
      />
    );
  }
}

export default connect(
  state => ({ currentModal: state.modals.current }),
  dispatch => bindActionCreators(modalActionCreators, dispatch),
)(ModalContainer);
