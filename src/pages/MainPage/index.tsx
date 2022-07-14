import './styles.scss';

import {cn} from '@bem-react/classname';
import Grid from '@components/Grid';
import Page from '@components/Page';
import {Song} from '@entities/mp3-player-song/model/types';
import MP3Player from '@features/mp3-player/ui';
import React from 'react';

const defaultSongs: Song[] = [
	{
		id: '1', name: 'Good Time', author: 'Unknown', src: '/static/songs/good-time.mp3', duration: 100,
	},
	{
		id: '2', name: 'Journey', author: 'Unknown', src: '/static/songs/journey.mp3', duration: 100,
	},
	{
		id: '3', name: 'World Peace', author: 'Unknown', src: '/static/songs/world-peace.mp3', duration: 100,
	},
];

const cnMainPage = cn('MainPage');

const MainPage: React.FC = () => (
	<Page title="22Byte Frontend test - bandrw">
		<Grid
			container
			className={cnMainPage()}
			justifyContent="center"
		>
			<MP3Player songs={defaultSongs} />
		</Grid>
	</Page>
);

export default MainPage;
