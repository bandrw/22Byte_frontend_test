import Grid from '@components/Grid';
import IconButton from '@components/IconButton';
import MP3PlayerTimeline from '@entities/mp3-player-timeline/ui';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {useAudio} from '@shared/lib/hooks/useAudio';
import {useAppSelector} from '@store/hooks';
import React from 'react';

const MP3PlayerControls: React.FC = () => {
	const {selectedSong} = useAppSelector((state) => state.mp3Player);

	const {isPlaying, play, pause, currentTime, duration} = useAudio({
		src: selectedSong !== null ? selectedSong.src : null,
	});
	const isControlsDisabled = selectedSong === null;

	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			direction="column"
		>
			<MP3PlayerTimeline
				progress={
					currentTime !== 0 && duration !== 0
						? currentTime / duration
						: 0
				}
			/>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
			>
				<Grid item>
					<IconButton
						size="small"
						disabled={isControlsDisabled}
					>
						<ArrowLeftIcon fontSize="medium" />
					</IconButton>
				</Grid>
				<Grid item>
					<IconButton
						size="large"
						disabled={isControlsDisabled}
						onClick={() => (isPlaying ? pause() : play())}
					>
						{isPlaying ? <PauseCircleIcon fontSize="large" /> : <PlayCircleIcon fontSize="large" />}
					</IconButton>
				</Grid>
				<Grid item>
					<IconButton
						size="small"
						disabled={isControlsDisabled}
					>
						<ArrowRightIcon fontSize="medium" />
					</IconButton>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default MP3PlayerControls;
