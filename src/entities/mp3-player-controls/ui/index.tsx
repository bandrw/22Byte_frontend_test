import Button from '@components/Button';
import Grid from '@components/Grid';
import MP3PlayerTimeline from '@entities/mp3-player-timeline/ui';
import React from 'react';

const MP3PlayerControls: React.FC = () => (
	<Grid container justifyContent="center" alignItems="center" direction="column">
		<MP3PlayerTimeline />
		<Grid container justifyContent="center">
			<Button>
				{'<'}
			</Button>
			<Button>
				+
			</Button>
			<Button>
				{'>'}
			</Button>
		</Grid>
	</Grid>
);

export default MP3PlayerControls;
