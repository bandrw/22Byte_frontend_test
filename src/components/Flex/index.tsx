import './styles.scss';

import {cn} from '@bem-react/classname';
import React from 'react';

interface CenterProps {
	children: React.ReactNode;
	justifyCenter?: boolean;
}

const cnFlex = cn('Flex');

const Flex: React.FC<CenterProps> = ({children, justifyCenter = false}) => (
	<div className={cnFlex({
		JustifyCenter: justifyCenter,
	})}
	>
		{children}
	</div>
);

export default Flex;
