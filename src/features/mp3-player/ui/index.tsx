import './styles.scss';

import {cn} from '@bem-react/classname';
import Grid from '@components/Grid';
import MP3PlayerControls from '@entities/mp3-player-controls/ui';
import {Song} from '@entities/mp3-player-song/model/types';
import MP3PlayerSong from '@entities/mp3-player-song/ui';
import React from 'react';

const cnMP3Player = cn('MP3Player');

interface MP3PlayerProps {
	songs: Song[];
}

const MP3Player: React.FC<MP3PlayerProps> = ({songs}) => (
	<Grid
		container
		direction="column"
		columns={1}
		rowGap={2}
		maxWidth={600}
		className={cnMP3Player()}
	>
		<Grid item className={cnMP3Player('SongsList')}>
			<Grid container columns={1} direction="column">
				{songs.map((song) => <MP3PlayerSong key={song.id} song={song} />)}
			</Grid>
		</Grid>
		<Grid item className={cnMP3Player('Controls')}>
			<MP3PlayerControls />
		</Grid>
	</Grid>
);

export default MP3Player;
