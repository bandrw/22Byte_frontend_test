import './styles.scss';

import {cn} from '@bem-react/classname';
import Grid from '@components/Grid';
import Tab from '@components/Tab';
import TabPanel from '@components/TabPanel';
import Tabs from '@components/Tabs';
import MP3PlayerControls from '@entities/mp3-player-controls/ui';
import {Song} from '@entities/mp3-player-song/model/types';
import MP3PlayerSong from '@entities/mp3-player-song/ui';
import Waveform from '@features/waveform/ui';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import WavesIcon from '@mui/icons-material/Waves';
import {useAppSelector} from '@store/hooks';
import React, {useState} from 'react';

const cnMP3Player = cn('MP3Player');

interface MP3PlayerProps {
	songs: Song[];
}

const MP3Player: React.FC<MP3PlayerProps> = ({songs}) => {
	const {selectedSong} = useAppSelector((state) => state.mp3Player);
	const [currentTab, setCurrentTab] = useState(0);

	return (
		<Grid
			container
			direction="column"
			flexWrap="nowrap"
			columns={1}
			rowGap={2}
			maxWidth={600}
			maxHeight={500}
			className={cnMP3Player()}
			margin={2}
		>
			<Tabs
				centered
				value={currentTab}
				onChange={(_, newValue: number) => setCurrentTab(newValue)}
			>
				<Tab label={(
					<Grid
						container
						alignItems="center"
						spacing={1}
					>
						<Grid item>
							Playlist
						</Grid>
						<Grid item>
							<MusicNoteIcon />
						</Grid>
					</Grid>
				)}
				/>
				<Tab
					label={(
						<Grid
							container
							alignItems="center"
							spacing={1}
						>
							<Grid item>
								Waveform
							</Grid>
							<Grid item>
								<WavesIcon />
							</Grid>
						</Grid>
					)}
					disabled={selectedSong === null}
				/>
			</Tabs>
			<TabPanel
				index={0}
				value={currentTab}
			>
				<Grid
					item
					className={cnMP3Player('SongsList')}
				>
					<Grid
						container
						columns={1}
						direction="column"
						spacing={1}
					>
						{songs.map((song) => (
							<Grid
								item
								key={song.id}
							>
								<MP3PlayerSong
									song={song}
								/>
							</Grid>
						))}
					</Grid>
				</Grid>
			</TabPanel>
			<TabPanel
				index={1}
				value={currentTab}
			>
				<Waveform audioSrc={selectedSong !== null ? selectedSong.src : null} />
			</TabPanel>
			<Grid
				item
				className={cnMP3Player('Controls')}
			>
				<MP3PlayerControls />
			</Grid>
		</Grid>
	);
};

export default MP3Player;
