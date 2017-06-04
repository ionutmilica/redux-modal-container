import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class SimpleModal extends React.Component {

  render() {
    const { hideModal } = this.props;

    return (
      <Modal isOpen={true}>
        <ModalHeader>Access forbidden</ModalHeader>
        <ModalBody>
          <ModalBody>
            Your account is disabled. You cannot enter.
          </ModalBody>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={hideModal}>Ok</Button>{' '}
          <Button color="secondary" onClick={hideModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
