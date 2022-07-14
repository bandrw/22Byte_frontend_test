import {useAnimate} from '@shared/lib/hooks/useAnimate';
import {useCallback, useEffect, useState} from 'react';

interface UseAudioProps {
	src: string;
}

interface AudioState {
	isPlaying: boolean;
	audio: HTMLAudioElement | null;
}

export const useAudio = ({src}: UseAudioProps) => {
	const [state, setState] = useState<AudioState>({
		isPlaying: false, audio: null,
	});
	const [currentTime, setCurrentTime] = useState(0);

	const updateCurrentTime = useCallback(() => {
		if (state.isPlaying && state.audio !== null) setCurrentTime(state.audio.currentTime);
	}, [state.audio, state.isPlaying]);

	useAnimate({
		callback: updateCurrentTime,
	});

	const play = useCallback(() => {
		setState((prevState) => (prevState.isPlaying ? prevState : ({
			isPlaying: true,
			audio: prevState.audio === null ? new Audio(src) : prevState.audio,
		})));
	}, [src]);

	const pause = useCallback(() => {
		setState((prevState) => (!prevState.isPlaying ? prevState : ({
			...prevState,
			isPlaying: false,
		})));
	}, []);

	useEffect(() => {
		if (state.isPlaying && state.audio !== null) {
			state.audio.play()
				.catch(() => {
					setState((prevState) => ({
						...prevState,
						isPlaying: false,
					}));
				});
		} else if (state.audio !== null && !state.isPlaying) {
			state.audio.pause();
		}
	}, [state.audio, state.isPlaying]);

	return {
		isPlaying: state.isPlaying,
		play,
		pause,
		duration: state.audio !== null ? state.audio.duration : 0,
		currentTime,
	};
};
