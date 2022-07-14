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
	const [, setSt] = useState(false);

	const forceUpdate = useCallback(() => {
		setSt((prevState) => !prevState);
	}, []);

	useAnimate({
		callback: forceUpdate,
	});

	const updateCurrentTime = useCallback((newTime: number) => {
		if (state.audio !== null) state.audio.currentTime = newTime;
	}, [state.audio]);

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
		currentTime: state.audio === null ? 0 : state.audio.currentTime,
		updateCurrentTime,
	};
};
