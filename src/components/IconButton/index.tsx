import MUIIconButton, {IconButtonProps} from '@mui/material/IconButton';
import React from 'react';

const IconButton: React.FC<IconButtonProps> = (props) => {
	return (
		<MUIIconButton {...props} />
	);
};

export default IconButton;
