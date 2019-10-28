import React from 'react';
import { DropDown } from './DropDown';
import { Line } from './Line';

import './List.scss';

export const List = () => {
	const tags = [
		{ id: 0, title: 'World Of Tanks', isActive: false},
		{ id: 1, title: 'World Of Warplanes', isActive: true},
		{ id: 2, title: 'World Of Warships', isActive: false},
	]

	return (
		<div>
			<Line tags={tags} />
			<DropDown tags={tags} />
		</div>
	)
}
