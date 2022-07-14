import React from 'react';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({children, value, index, ...rest}) => {
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			{...rest}
		>
			{value === index && (
				children
			)}
		</div>
	);
};

export default TabPanel;
