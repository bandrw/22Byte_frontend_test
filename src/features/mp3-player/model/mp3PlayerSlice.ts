import {Song} from '@entities/mp3-player-song/model/types';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {api} from '@shared/api';

interface Mp3PlayerState {
	playlist: Song[];
	selectedSong: Song | null;
}

const initialState: Mp3PlayerState = {
	playlist: [],
	selectedSong: null,
};

export const getAllSongsAction = createAsyncThunk(
	'mp3Player/getAllSongs',
	async () => {
		return api.getAllSongs();
	},
);

export const mp3PlayerSlice = createSlice({
	name: 'mp3Player',
	initialState,
	reducers: {
		selectSong: (state: Mp3PlayerState, action: PayloadAction<Song | null>) => {
			state.selectedSong = action.payload;
		},
	},
	extraReducers: {
		[getAllSongsAction.fulfilled.type]: (state: Mp3PlayerState, action: PayloadAction<Song[]>) => {
			state.playlist = action.payload;
		},
	},
});

export const {selectSong} = mp3PlayerSlice.actions;
export default mp3PlayerSlice.reducer;
