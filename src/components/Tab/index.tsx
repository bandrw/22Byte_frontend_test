import MUITab, {TabProps} from '@mui/material/Tab';
import React from 'react';

const Tab: React.FC<TabProps> = (props) => {
	return (
		<MUITab {...props} />
	);
};

export default Tab;
