import Grid from '@components/Grid';
import React from 'react';

const Header: React.FC = () => {
	return (
		<Grid
			container
			width="100%"
			height={40}
			justifyContent="center"
			alignItems="center"
		>
			<Grid item>
				<h1>MP3 Player</h1>
			</Grid>
		</Grid>
	);
};

export default Header;
