interface UseAnimateProps {
	fps?: number;
	callback: () => void;
	enabled?: boolean;
}

export const useAnimate = ({fps = 60, callback, enabled = true}: UseAnimateProps) => {
	let now: number;
	let then: number;
	const fpsInterval = 1000 / fps;

	const animate = () => {
		if (!enabled) return;

		requestAnimationFrame(animate);
		now = Date.now();
		const elapsed = now - then;

		if (elapsed > fpsInterval) {
			then = now - (elapsed % fpsInterval);
			callback();
		}
	};

	then = Date.now();
	animate();
};
