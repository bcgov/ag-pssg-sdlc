import * as React from 'react';
import Alert from 'react-bootstrap/Alert';
import Toast from 'react-bootstrap/Toast';
import styled from 'styled-components';

const ToastContainer = styled(Toast)`
  max-width: 100%;
`;

const AlertMessage = styled(Alert)`
  margin: 0;
`;

export interface ISnackbarState {
  variant?: 'success' | 'danger';
  message?: string;
  show?: boolean;
}

interface ISnackbar extends ISnackbarState {
  onClose: () => void;
}

export const Snackbar: React.FC<ISnackbar> = ({ onClose, message, show, variant }) => {
  return (
    <ToastContainer show={show} delay={5000} autohide onClose={onClose}>
      {show && <AlertMessage variant={variant}>{message}</AlertMessage>}
    </ToastContainer>
  );
};
