/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Grid from '@components/Grid';
import React, {useEffect} from 'react';
import WaveSurfer from 'wavesurfer.js';

interface WaveformProps {
	audioSrc: string | null;
}

const Waveform: React.FC<WaveformProps> = ({audioSrc}) => {
	useEffect(() => {
		if (audioSrc === null) return;

		const wavesurfer = WaveSurfer.create({
			barWidth: 3,
			cursorWidth: 1,
			container: '#waveform',
			backend: 'WebAudio',
			height: 80,
			progressColor: '#2D5BFF',
			responsive: true,
			waveColor: '#EFEFEF',
			cursorColor: 'transparent',
			interact: false,
			normalize: true,
		});
		wavesurfer.load(audioSrc);

		return () => {
			wavesurfer.destroy();
		};
	}, [audioSrc]);

	return (
		<Grid
			padding={2}
			id="waveform"
		/>
	);
};

export default Waveform;
