import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as modalActionCreators from './actions';

class ModalContainer extends React.Component {
  static defaultProps = {
    modals: {},
  };

  render() {
    const { showModal, hideModal, modals, currentModals } = this.props;

    if (currentModals.length < 1) {
      return null;
    }

    const { id, props } = currentModals[0];
    const Component = modals[id];

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
  state => ({ currentModals: state.modals.collection }),
  dispatch => bindActionCreators(modalActionCreators, dispatch),
)(ModalContainer);
