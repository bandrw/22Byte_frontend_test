import {Song} from '@entities/mp3-player-song/model/types';

class Api {
	// eslint-disable-next-line class-methods-use-this
	getAllSongs(): Promise<Song[]> {
		return new Promise((resolve) => {
			resolve([
				{
					id: '1',
					name: 'Good Time',
					author: 'AShamaluevMusic',
					src: '/static/songs/good-time.mp3',
					duration: 146,
					image: '/static/images/random-img-1.png',
				},
				{
					id: '2',
					name: 'Journey',
					author: 'AShamaluevMusic',
					src: '/static/songs/journey.mp3',
					duration: 164,
					image: '/static/images/random-img-2.png',
				},
				{
					id: '3',
					name: 'World Peace',
					author: 'AShamaluevMusic',
					src: '/static/songs/world-peace.mp3',
					duration: 191,
					image: '/static/images/random-img-3.png',
				},
			]);
		});
	}
}

export const api = new Api();
