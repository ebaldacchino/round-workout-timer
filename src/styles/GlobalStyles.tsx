import { Global } from '@emotion/react';
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = () =>
	css({
		body: {
			WebkitTapHighlightColor: 'transparent',
		},
		'#root': {
			...tw`flex flex-col items-center justify-center min-h-screen bg-blue-800 text-white`,
		},
		'*': {
			...tw`[@media (min-width: 1920px)]:text-[0.833vw] [@media (max-width: 280px)]:text-[5.714vw]`,
		},
	});

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<Global styles={() => customStyles()} />
	</>
);

export default GlobalStyles;
