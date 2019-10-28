import React from 'react';

import './Line.scss'

export const Line = ({ tags }) => {
	return (
		<div className="line">
			{tags.map(({ id, title, isActive }) => (
				<li
					key={id}
					className={`line__tag ${isActive ? 'line__tag--active' : ''}`}
				>
					{title}
				</li>
			))}
		</div>
	)
}
