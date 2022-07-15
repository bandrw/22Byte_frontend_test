import {Song} from '@entities/mp3-player-song/model/types';

export const sortMethods: {
	[key: string]: {
		name: string;
		sort: (a: Song, b: Song) => number;
	};
} = {
	name: {
		name: 'Name',
		sort: (a, b) => (a.name < b.name ? -1 : 1),
	},
	author: {
		name: 'Author',
		sort: (a, b) => (a.author < b.author ? -1 : 1),
	},
	duration: {
		name: 'Duration',
		sort: (a, b) => a.duration - b.duration,
	},
};
