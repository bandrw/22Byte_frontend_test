import ClickAwayListener from '@mui/material/ClickAwayListener';
import Tooltip, {TooltipProps} from '@mui/material/Tooltip';
import {useToggle} from '@shared/lib/hooks/useToggle';
import React from 'react';

interface TooltipStatefulProps extends Omit<TooltipProps, 'children'> {
	content: (handleTooltipOpen: () => void) => React.ReactElement;
}

const TooltipStateful: React.FC<TooltipStatefulProps> = ({content, ...props}) => {
	const {
		isToggled: open,
		toggleOff: handleTooltipClose,
		toggleOn: handleTooltipOpen,
	} = useToggle(false);

	return (
		<ClickAwayListener onClickAway={handleTooltipClose}>
			<div>
				<Tooltip
					PopperProps={{
						disablePortal: true,
					}}
					onClose={handleTooltipClose}
					open={open}
					disableFocusListener
					disableHoverListener
					disableTouchListener
					{...props}
				>
					{content(handleTooltipOpen)}
				</Tooltip>
			</div>
		</ClickAwayListener>
	);
};

export default TooltipStateful;
