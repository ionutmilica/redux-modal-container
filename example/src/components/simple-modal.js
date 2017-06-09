import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import constants from '../constants';

export default class SimpleModal extends React.Component {
  triggerNewModal = () => {
    this.props.showModal(constants.REGISTER_MODAL, SimpleModal);
  };

  render() {
    const { hideModal } = this.props;

    return (
      <Modal isOpen>
        <ModalHeader>Access forbidden</ModalHeader>
        <ModalBody>
          <ModalBody>
            Your account is disabled. You cannot enter.
          </ModalBody>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.triggerNewModal}>Ok</Button>{' '}
          <Button color="secondary" onClick={hideModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
