import mp3PlayerReducer from '@features/mp3-player/model/mp3PlayerSlice';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		mp3Player: mp3PlayerReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
