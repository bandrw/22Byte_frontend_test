import './styles.scss';

import {cn} from '@bem-react/classname';
import Button from '@components/Button';
import Grid from '@components/Grid';
import {Song} from '@entities/mp3-player-song/model/types';
import {selectSong} from '@features/mp3-player/model/mp3PlayerSlice';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import moment from 'moment/moment';
import React from 'react';

interface MP3PlayerSongProps {
	song: Song;
}

const cnMP3PlayerSong = cn('MP3PlayerSong');

const MP3PlayerSong: React.FC<MP3PlayerSongProps> = ({song}) => {
	const {selectedSong} = useAppSelector((state) => state.mp3Player);
	const dispatch = useAppDispatch();

	return (
		<Button
			variant={selectedSong === song ? 'outlined' : undefined}
			fullWidth
			onClick={() => {
				dispatch(selectSong(song));
			}}
			sx={{
				padding: '5px 15px',
				border: selectedSong !== song ? '1px solid transparent' : undefined,
			}}
		>
			<Grid
				container
				className={cnMP3PlayerSong()}
				alignItems="center"
				flexWrap="nowrap"
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
							className={cnMP3PlayerSong('Name')}
							maxWidth={200}
						>
							{song.name}
						</Grid>
						<Grid
							className={cnMP3PlayerSong('Author')}
							maxWidth={200}
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
};

export default MP3PlayerSong;
