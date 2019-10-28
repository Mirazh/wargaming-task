import React from 'react';

import './ElementsChecker.scss';

export class ElementsChecker extends React.Component {
	state = {
		checkedList: this.props.checkedList
	};

	handleCheck = id => {
		const isChecked = this.state.checkedList.includes(id);

		this.setState(prevState => ({
			checkedList: isChecked
				? prevState.checkedList.filter(checkedId => checkedId !== id)
				: [...prevState.checkedList, id],
		}));
	}

	handleSave = () => {
		this.props.onCheckedListChange(this.state.checkedList);
		this.props.onDialogOpen();
	};

	render() {
		const { onDialogOpen, list } = this.props;
		const { checkedList } = this.state;

		return (
			<div className="elements-checker">
				<div className="elements-checker__list">
					{list.map((element, id) => {
						const isChecked = checkedList.includes(id);

						return (
							<div key={id}>
								<input
									id={`element-${id}`}
									type="checkbox"
									checked={isChecked}
									onChange={() => this.handleCheck(id)}
									disabled={checkedList.length > 2 && !isChecked}
								/>
								<label htmlFor={`element-${id}`}>{element}</label>
							</div>
						)
					})}
				</div>
				<div>
					<button onClick={this.handleSave}>Сохранить</button>
					<button onClick={onDialogOpen}>Отмена</button>
				</div>
			</div>
		)
	}
}
