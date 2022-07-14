import Grid from '@components/Grid';
import {Song} from '@entities/mp3-player-song/model/types';
import React from 'react';

interface MP3PlayerSongProps {
	song: Song;
}

const MP3PlayerSong: React.FC<MP3PlayerSongProps> = ({song}) => (
	<Grid item>
		{song.name}
		{' - '}
		{song.author}
		{' - '}
		{song.duration}
	</Grid>
);

export default MP3PlayerSong;
