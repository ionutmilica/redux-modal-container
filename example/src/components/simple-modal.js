import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SimpleModal = ({ hideModal }) => (
  <Modal isOpen>
    <ModalHeader>Access forbidden</ModalHeader>
    <ModalBody>
      <ModalBody>Your account is disabled. You cannot enter.</ModalBody>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={hideModal}>
        Ok
      </Button>{' '}
      <Button color="secondary" onClick={hideModal}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
);

export default SimpleModal;
