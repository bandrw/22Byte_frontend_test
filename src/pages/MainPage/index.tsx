import Flex from '@components/Flex';
import Page from '@components/Page';
import {Song} from '@entities/mp3-player-song/model/types';
import MP3Player from '@features/mp3-player/ui';
import React from 'react';

const defaultSongs: Song[] = [
	{
		id: '1', name: 'song1', author: 'author1',
	},
	{
		id: '2', name: 'song2', author: 'author2',
	},
	{
		id: '3', name: 'song3', author: 'author3',
	},
];

const MainPage: React.FC = () => (
	<Page title="22Byte Frontend test - bandrw">
		<Flex justifyCenter>
			<MP3Player songs={defaultSongs} />
		</Flex>
	</Page>
);

export default MainPage;
