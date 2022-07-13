import {createSlice, Draft} from '@reduxjs/toolkit';

interface Mp3PlayerState {
	isPlaying: boolean;
}

const initialState: Mp3PlayerState = {
	isPlaying: false,
};

export const mp3PlayerSlice = createSlice({
	name: 'mp3Player',
	initialState,
	reducers: {
		play: (state: Draft<Mp3PlayerState>) => {
			state.isPlaying = true;
		},
		pause: (state: Draft<Mp3PlayerState>) => {
			state.isPlaying = false;
		},
	},
});

export const {play, pause} = mp3PlayerSlice.actions;
export default mp3PlayerSlice.reducer;
