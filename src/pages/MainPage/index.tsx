import Container from '@components/Container';
import Flex from '@components/Flex';
import Page from '@components/Page';
import MP3Player from '@features/mp3-player/ui';
import React from 'react';

const MainPage: React.FC = () => (
	<Page title="22Byte Frontend test - bandrw">
		<Container>
			<Flex justifyCenter>
				<MP3Player />
			</Flex>
		</Container>
	</Page>
);

export default MainPage;
