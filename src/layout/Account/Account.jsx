import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import {
  Label,
  Info,
  AccountDetails,
  Actions,
  ActionButton,
  DetailInfo,
} from './Account.style';
import { Container } from '../../shared/Flexi';
import DeleteAccountModal from './DeleteAccountModal';
import ChangeNameForm from './ChangeNameForm';
import ChangePasswordForm from './ChangePasswordForm';

const Account = () => {
  const [showNameForm, setShowNameForm] = useState(false);
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const toggleNameForm = () => setShowNameForm(!showNameForm);
  const toggleChangePasswordForm = () => setShowChangePasswordForm(!showChangePasswordForm);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <Container>
      <AccountDetails>
        <DetailInfo>
          <Label>Email</Label>
          <Info>superframe@email.com</Info>
        </DetailInfo>
        <DetailInfo>
          <Label>Name</Label>
          <Info>
            Kerry B. Cooper
            <button
              onClick={toggleNameForm}
              title={showNameForm ? 'Cancel' : 'Change Name'}
            >
              {showNameForm ? <IoMdClose /> : <AiOutlineEdit /> }
            </button>
          </Info>
          {showNameForm && <ChangeNameForm setShow={setShowNameForm} />}
        </DetailInfo>
        <DetailInfo>
          <Label>Joined in</Label>
          <Info>December 2021</Info>
        </DetailInfo>
        <Actions>
          <ActionButton
            onClick={toggleChangePasswordForm}
          >Change Password
          </ActionButton>
          <ActionButton
            onClick={openModal}
            danger
          >Delete Account
          </ActionButton>
        </Actions>
        {showChangePasswordForm
        && <ChangePasswordForm setShowChangePasswordForm={setShowChangePasswordForm} />}

        <DeleteAccountModal
          show={showModal}
          closeModal={closeModal}
        />
      </AccountDetails>
    </Container>
  );
};

export default Account;
