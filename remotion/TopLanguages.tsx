import React from 'react';
import {AbsoluteFill} from 'remotion';

export const TopLanguages: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				fontFamily: 'MonaSans',
				fontWeight: 700,
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: 45,
				textAlign: 'center',
				lineHeight: 1.4,
			}}
		>
			I speak lots of languages.
			<br />
			These are my top 3.
		</AbsoluteFill>
	);
};