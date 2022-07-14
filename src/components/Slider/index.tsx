import MUISlider, {SliderProps} from '@mui/material/Slider';
import React from 'react';

const Slider: React.FC<SliderProps> = (props) => {
	return (
		<MUISlider {...props} />
	);
};

export default Slider;
