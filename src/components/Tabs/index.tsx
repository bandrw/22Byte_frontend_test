import MUITabs, {TabsProps} from '@mui/material/Tabs';
import React from 'react';

const Tabs: React.FC<TabsProps> = (props) => {
	return (
		<MUITabs {...props} />
	);
};

export default Tabs;
