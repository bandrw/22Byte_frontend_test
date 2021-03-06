import {Song} from '@entities/mp3-player-song/model/types';

const API_URL = process.env.NODE_ENV === 'production' ? 'https://bandrw.github.io/22Byte_frontend_test' : '';

class Api {
	// eslint-disable-next-line class-methods-use-this
	getAllSongs(): Promise<Song[]> {
		return new Promise((resolve) => {
			resolve([
				{
					id: '1',
					name: 'Good Time',
					author: 'AShamaluevMusic',
					src: `${API_URL}/static/songs/good-time.mp3`,
					duration: 146,
					image: `${API_URL}/static/images/random-img-1.png`,
				},
				{
					id: '2',
					name: 'Never Gonna Give You Up',
					author: 'Rick Astley',
					src: `${API_URL}/static/songs/never-gonna-give-you-up.mp3`,
					duration: 213,
					image: `${API_URL}/static/images/never-gonna-give-you-up.jpeg`,
				},
				{
					id: '3',
					name: 'Journey',
					author: 'AShamaluevMusic',
					src: `${API_URL}/static/songs/journey.mp3`,
					duration: 164,
					image: `${API_URL}/static/images/random-img-2.png`,
				},
				{
					id: '4',
					name: 'Empty Phases',
					author: 'Mr.Kitty',
					src: `${API_URL}/static/songs/empty-phases.mp3`,
					duration: 164,
					image: `${API_URL}/static/images/empty-phases.jpeg`,
				},
				{
					id: '5',
					name: 'World Peace',
					author: 'AShamaluevMusic',
					src: `${API_URL}/static/songs/world-peace.mp3`,
					duration: 191,
					image: `${API_URL}/static/images/random-img-3.png`,
				},
				{
					id: '6',
					name: 'Крылатые Качели',
					author: 'Большой детский хор Всесоюзного радио и Центрального телевидения, Таня Мелихова',
					src: `${API_URL}/static/songs/krylatye-kacheli.mp3`,
					duration: 195,
					image: `${API_URL}/static/images/krylatye-kacheli.jpeg`,
				},
			]);
		});
	}
}

export const api = new Api();
