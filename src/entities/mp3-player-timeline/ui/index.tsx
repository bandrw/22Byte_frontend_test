import './styles.scss';

import {cn} from '@bem-react/classname';
import React from 'react';

const cnTimeline = cn('Timeline');

interface MP3PlayerTimelineProps {
	progress: number;
}

const MP3PlayerTimeline: React.FC<MP3PlayerTimelineProps> = ({progress}) => (
	<div className={cnTimeline()}>
		<div className={cnTimeline('Bar')}>
			{progress >= 0 && progress <= 1 ? (
				<div
					className={cnTimeline('Pointer')}
					style={{
						left: `${progress * 100}%`,
					}}
				/>
			) : null}
		</div>
	</div>
);

export default MP3PlayerTimeline;
