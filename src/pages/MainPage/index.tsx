import './styles.scss';

import {cn} from '@bem-react/classname';
import Grid from '@components/Grid';
import Page from '@components/Page';
import {getAllSongsAction} from '@features/mp3-player/model/mp3PlayerSlice';
import MP3Player from '@features/mp3-player/ui';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import React, {useEffect} from 'react';

const cnMainPage = cn('MainPage');

const MainPage: React.FC = () => {
	const {playlist} = useAppSelector((state) => state.mp3Player);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllSongsAction());
	}, [dispatch]);

	return (
		<Page title="22Byte Frontend test - bandrw">
			<Grid
				container
				className={cnMainPage()}
				justifyContent="center"
			>
				<MP3Player songs={playlist} />
			</Grid>
		</Page>
	);
};

export default MainPage;
