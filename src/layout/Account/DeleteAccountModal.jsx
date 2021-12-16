import React from 'react';
import { IoMdClose } from 'react-icons/io';
import {
  Modal,
  ModalMessage,
  Actions,
  ActionButton,
  CloseModal,
} from './Account.style';
import Backdrop from '../../atom/Backdrop';

const DeleteAccountModal = ({ show, closeModal }) => {
  const deleteAccount = () => {
    // Call Api Here To Delete Account

    console.log('Deleting Your Account');
  };

  return (
    <Backdrop
      transparent={false}
      open={show}
      handleClose={closeModal}
    >
      <Modal>
        <CloseModal onClick={closeModal}>
          <IoMdClose />
        </CloseModal>
        <ModalMessage>Are you sure want to delete your account ?
          <br />
          <span>
            &ldquo;This action cannot be undone&rdquo;
          </span>
        </ModalMessage>
        <Actions>
          <ActionButton onClick={deleteAccount}>Yes</ActionButton>
          <ActionButton
            onClick={closeModal}
            danger
          >No
          </ActionButton>
        </Actions>
      </Modal>
    </Backdrop>
  );
};

export default DeleteAccountModal;
