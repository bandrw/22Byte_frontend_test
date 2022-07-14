import Slider from '@components/Slider';
import React from 'react';

interface MP3PlayerTimelineProps {
	position: number;
	duration: number;
	updateCurrentTime: (time: number) => void;
	onMouseDown: () => void;
	onMouseUp: () => void;
	disabled?: boolean;
}

const MP3PlayerTimeline: React.FC<MP3PlayerTimelineProps> = ({
	position,
	duration,
	updateCurrentTime,
	onMouseDown,
	onMouseUp,
	disabled = false,
}) => {
	return (
		<Slider
			disabled={disabled}
			min={0}
			step={1}
			max={duration}
			value={position}
			onChange={(_, time: number) => {
				updateCurrentTime(time);
			}}
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			sx={{
				width: 'calc(100% - 40px)',
			}}
		/>
	);
};

export default MP3PlayerTimeline;
