import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import constants from '../constants';

export default class SimpleModalRegister extends React.Component {

  triggerNewModal = () => {
    this.props.showModal(constants.LOGIN_MODAL);
  };

  render() {
    const { hideModal } = this.props;

    return (
      <Modal isOpen={true}>
        <ModalHeader>Account created</ModalHeader>
        <ModalBody>
          <ModalBody>
            Your account has been successfully created. <br />
            <button onClick={this.triggerNewModal}>Open login modal</button>
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
