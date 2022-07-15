import MUIModal, {ModalProps} from '@mui/material/Modal';
import React from 'react';

const Modal: React.FC<ModalProps> = ({children, ...props}) => {
	return (
		<MUIModal {...props}>
			{children}
		</MUIModal>
	);
};

export default Modal;
