import {useAnimate} from '@shared/lib/hooks/useAnimate';
import {useCallback, useEffect, useState} from 'react';

interface UseAudioProps {
	src: string | null;
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
		if (state.audio !== null) {
			state.audio.play()
				.then(() => {
					setState((prevState) => (src === null ? prevState : ({
						...prevState,
						isPlaying: true,
					})));
				});
		}
	}, [src, state.audio]);

	const pause = useCallback(() => {
		if (state.audio !== null) state.audio.pause();
		setState((prevState) => (!prevState.isPlaying ? prevState : ({
			...prevState,
			isPlaying: false,
		})));
	}, [state.audio]);

	useEffect(() => {
		setState((prevState) => {
			if (src !== null && prevState.audio?.src !== src) {
				const newAudio = new Audio(src);
				if (prevState.audio !== null) prevState.audio.pause();
				if (prevState.isPlaying) {
					newAudio.play()
						.catch(() => setState((pS) => ({
							...pS, isPlaying: false,
						})));
				}
				return {
					...prevState,
					audio: newAudio,
				};
			}
			return prevState;
		});
	}, [src]);

	return {
		isPlaying: state.isPlaying,
		play,
		pause,
		duration: state.audio !== null && !Number.isNaN(state.audio.duration)
			? state.audio.duration
			: 0,
		currentTime,
	};
};
