import {Song} from '@entities/mp3-player-song/model/types';
import {sortMethods} from '@entities/mp3-player-sort/lib/sorting';
import {SortMethod} from '@entities/mp3-player-sort/model/types';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {api} from '@shared/api';

interface Mp3PlayerState {
	playlist: Song[];
	selectedSong: Song | null;
	sortMethod: SortMethod;
}

const initialState: Mp3PlayerState = {
	playlist: [],
	selectedSong: null,
	sortMethod: {
		name: 'author', direction: 'up',
	},
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
		previousSong: (state: Mp3PlayerState) => {
			if (state.selectedSong !== null) {
				const currentSongIndex = state.playlist.findIndex(
					(song) => song.id === state.selectedSong.id,
				);
				if (currentSongIndex > 0) {
					state.selectedSong = state.playlist[currentSongIndex - 1];
				}
			}
		},
		nextSong: (state: Mp3PlayerState) => {
			if (state.selectedSong !== null) {
				const currentSongIndex = state.playlist.findIndex(
					(song) => song.id === state.selectedSong.id,
				);
				if (currentSongIndex !== -1 && currentSongIndex < state.playlist.length - 1) {
					state.selectedSong = state.playlist[currentSongIndex + 1];
				}
			}
		},
		sortBy: (state: Mp3PlayerState, action: PayloadAction<SortMethod>) => {
			state.sortMethod = action.payload;
			if (state.sortMethod.direction === 'up') state.playlist.sort(sortMethods[action.payload.name].sort);
			else state.playlist.sort((a, b) => sortMethods[action.payload.name].sort(b, a));
		},
	},
	extraReducers: {
		[getAllSongsAction.fulfilled.type]: (state: Mp3PlayerState, action: PayloadAction<Song[]>) => {
			state.playlist = action.payload;
			state.playlist.sort(sortMethods[initialState.sortMethod.name].sort);
		},
	},
});

export const {selectSong, previousSong, nextSong, sortBy} = mp3PlayerSlice.actions;
export default mp3PlayerSlice.reducer;
