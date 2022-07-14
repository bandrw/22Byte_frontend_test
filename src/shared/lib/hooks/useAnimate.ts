interface UseAnimateProps {
	callback: () => void;
	fps?: number;
	enabled?: boolean;
}

export const useAnimate = ({callback, fps = 60, enabled = true}: UseAnimateProps) => {
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
