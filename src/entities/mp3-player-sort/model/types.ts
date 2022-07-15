import {sortMethods} from '@entities/mp3-player-sort/lib/sorting';

export type SortMethod = {name: keyof typeof sortMethods; direction: 'up' | 'down'};
