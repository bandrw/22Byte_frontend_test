import React, {useEffect} from 'react';

interface PageProps {
	children: React.ReactNode;
	title: string;
}

const Page: React.FC<PageProps> = ({children, title}) => {
	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<>
			<div>Header</div>
			{children}
			<div>Footer</div>
		</>
	);
};

export default Page;
