import Button from '@components/Button';
import Grid from '@components/Grid';
import MP3PlayerTimeline from '@entities/mp3-player-timeline/ui';
import {useAudio} from '@shared/lib/useAudio';
import React from 'react';

const MP3PlayerControls: React.FC = () => {
	const {isPlaying, play, pause, currentTime, duration} = useAudio({
		src: '/static/songs/good-time.mp3',
	});

	return (
		<Grid container justifyContent="center" alignItems="center" direction="column">
			<MP3PlayerTimeline
				progress={
					currentTime !== 0
						? currentTime / duration
						: 0
				}
			/>
			<Grid container justifyContent="center">
				<Button>
					{'<'}
				</Button>
				<Button onClick={() => (isPlaying ? pause() : play())}>
					+
				</Button>
				<Button>
					{'>'}
				</Button>
			</Grid>
		</Grid>
	);
};

export default MP3PlayerControls;
