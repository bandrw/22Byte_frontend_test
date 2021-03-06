import Grid from '@components/Grid';
import IconButton from '@components/IconButton';
import MP3PlayerTimeline from '@entities/mp3-player-timeline/ui';
import {nextSong, previousSong} from '@features/mp3-player/model/mp3PlayerSlice';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {useAudio} from '@shared/lib/hooks/useAudio';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import React from 'react';

const MP3PlayerControls: React.FC = () => {
	const {selectedSong} = useAppSelector((state) => state.mp3Player);
	const dispatch = useAppDispatch();

	const {isPlaying, play, pause, currentTime, updateCurrentTime, duration} = useAudio({
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
				duration={duration}
				position={currentTime}
				updateCurrentTime={updateCurrentTime}
				onMouseDown={pause}
				onMouseUp={play}
				disabled={isControlsDisabled}
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
						onClick={() => dispatch(previousSong())}
						sx={{
							'& .MuiSvgIcon-root': {
								'font-size': '1.7rem',
								color: 'var(--action-color)',
							},
						}}
					>
						<ArrowLeftIcon fontSize="medium" />
					</IconButton>
				</Grid>
				<Grid item>
					<IconButton
						size="large"
						disabled={isControlsDisabled}
						onClick={() => (isPlaying ? pause() : play())}
						sx={{
							'& .MuiSvgIcon-root': {
								'font-size': '3rem',
								color: 'var(--action-color)',
							},
						}}
					>
						{isPlaying ? (
							<PauseCircleIcon
								fontSize="large"
							/>
						) : (
							<PlayCircleIcon
								fontSize="large"
							/>
						)}
					</IconButton>
				</Grid>
				<Grid item>
					<IconButton
						size="small"
						disabled={isControlsDisabled}
						onClick={() => dispatch(nextSong())}
						sx={{
							'& .MuiSvgIcon-root': {
								'font-size': '1.7rem',
								color: 'var(--action-color)',
							},
						}}
					>
						<ArrowRightIcon fontSize="medium" />
					</IconButton>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default MP3PlayerControls;
