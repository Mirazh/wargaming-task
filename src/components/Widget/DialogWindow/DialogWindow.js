import React from 'react';

import './DialogWindow.scss';

export class DialogWindow extends React.Component {
	render() {
		const { title, children, onClose } = this.props;

		return (
			<>
				<div className="modal" />
				<div className="dialog-wrapper">
					<div className="dialog">
						<div className="dialog__header">
							<h4>{title}</h4>
							<span onClick={onClose}>___X</span>
						</div>
						{children}
					</div>
				</div>
			</>
		)
	}
}
