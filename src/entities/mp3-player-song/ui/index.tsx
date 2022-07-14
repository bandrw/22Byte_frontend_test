import './styles.scss';

import {cn} from '@bem-react/classname';
import Button from '@components/Button';
import Grid from '@components/Grid';
import {Song} from '@entities/mp3-player-song/model/types';
import moment from 'moment/moment';
import React from 'react';

interface MP3PlayerSongProps {
	song: Song;
}

const cnMP3PlayerSong = cn('MP3PlayerSong');

const MP3PlayerSong: React.FC<MP3PlayerSongProps> = ({song}) => (
	<Button
		fullWidth
	>
		<Grid
			container
			className={cnMP3PlayerSong()}
			alignItems="center"
		>
			<Grid
				item
				marginRight={2}
				className={cnMP3PlayerSong('Image')}
				style={{
					backgroundImage: `url(${song.image})`,
				}}
			/>
			<Grid
				item
				marginRight={2}
			>
				<Grid
					container
					direction="column"
					alignItems="flex-start"
				>
					<Grid
						item
						className={cnMP3PlayerSong('Name')}
					>
						{song.name}
					</Grid>
					<Grid
						item
						className={cnMP3PlayerSong('Author')}
					>
						{song.author}
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				className={cnMP3PlayerSong('Duration')}
				marginLeft="auto"
			>
				{moment(song.duration * 1000).format('mm:ss')}
			</Grid>
		</Grid>
	</Button>
);

export default MP3PlayerSong;
