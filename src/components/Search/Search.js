import React from 'react';

import './Search.scss'

export const Search = () => {
	return (
		<div className="search">
			<input type="search" className="search__input"/>
			<button className="search__button">Найти</button>
		</div>
	)
};
