import {Container as MUIContainer, ContainerProps} from '@mui/material';
import React from 'react';

const Container: React.FC<ContainerProps> = (props) => (
	<MUIContainer {...props} />
);

export default Container;
