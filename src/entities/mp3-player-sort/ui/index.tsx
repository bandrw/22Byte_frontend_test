import './styles.scss';

import {cn} from '@bem-react/classname';
import Button from '@components/Button';
import Grid from '@components/Grid';
import IconButton from '@components/IconButton';
import Modal from '@components/Modal';
import {sortMethods} from '@entities/mp3-player-sort/lib/sorting';
import {sortBy} from '@features/mp3-player/model/mp3PlayerSlice';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SortIcon from '@mui/icons-material/Sort';
import {useToggle} from '@shared/lib/hooks/useToggle';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import React from 'react';

const cnMP3PlayerSort = cn('MP3PlayerSort');

const MP3PlayerSort: React.FC = () => {
	const {sortMethod} = useAppSelector((state) => state.mp3Player);
	const dispatch = useAppDispatch();

	const {
		isToggled: open,
		toggleOn: handleOpen,
		toggleOff: handleClose,
	} = useToggle(false);

	return (
		<div>
			<IconButton onClick={handleOpen}>
				<SortIcon />
			</IconButton>
			<Modal
				open={open}
				onClose={handleClose}
				className={cnMP3PlayerSort()}
			>
				<Grid
					container
					className={cnMP3PlayerSort('Modal')}
					direction="column"
					padding={3}
				>
					<Grid
						item
						marginBottom={1}
					>
						<h2>Sort by:</h2>
					</Grid>
					{Object.keys(sortMethods)
						.map((method) => (
							<Grid
								item
								key={method}
								marginTop={1}
							>
								<Button
									fullWidth
									variant={sortMethod.name === method ? 'outlined' : undefined}
									onClick={() => dispatch(sortBy({
										name: method,
										direction: sortMethod.name === method
											? (sortMethod.direction === 'up' ? 'down' : 'up')
											: sortMethod.direction,
									}))}
								>
									<Grid
										container
										alignItems="center"
										justifyContent="center"
										width="100%"
									>
										<Grid item>
											{method}
										</Grid>
										{sortMethod.name === method ? (
											<Grid
												item
												marginLeft={1}
												marginRight={1}
												position="absolute"
												right={0}
											>
												<Grid
													container
													alignItems="center"
												>
													{sortMethod.direction === 'up' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
												</Grid>
											</Grid>
										) : null}
									</Grid>
								</Button>
							</Grid>
						))}
				</Grid>
			</Modal>
		</div>
	);
};

export default MP3PlayerSort;
