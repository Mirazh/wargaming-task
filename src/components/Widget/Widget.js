import React from 'react';
import { DialogWindow } from './DialogWindow';
import { ElementsChecker } from './ElementsChecker';

import './Widget.scss';

const initializeList = count => {
	const list = [];

	for (let i = 1; i <= count; i++) {
		list.push(`Элемент ${i}`)
	}

	return list;
};

export class Widget extends React.Component {

	state = {
		list: initializeList(300),
		checkedList: [1,3],
		isDialogOpen: false,
	};

	handleDialogOpen = () => this.setState(prevState => ({ isDialogOpen: !prevState.isDialogOpen }));

	handleCheckedListChange = checkedList => this.setState({ checkedList: checkedList.sort() });

	handleUncheck = id => {
		this.setState(({ checkedList }) => ({ checkedList: checkedList.filter(checkedId => checkedId !== id) }));
	};

	render() {
		const { checkedList, isDialogOpen, list } = this.state;

		return (
			<div className="widget">
				<h1>Выбор элементов</h1>
				<p>На данный момент у вас выбрано {checkedList.size} элемента:</p>

				{checkedList.length > 0 && (
					<div>
						{checkedList.map(id => (
							<div key={id} onClick={() => this.handleUncheck(id)}>
								<span>{list[id]}</span>
							</div>
						))}
					</div>
				)}

				<button onClick={this.handleDialogOpen}>Изменить</button>

				{isDialogOpen && (
					<DialogWindow title="Диалог выбора элементов" onClose={this.handleDialogOpen}>
						<ElementsChecker
							list={list}
							checkedList={checkedList}
							onDialogOpen={this.handleDialogOpen}
							onCheckedListChange={this.handleCheckedListChange}
						/>
					</DialogWindow>
				)}
			</div>
		)
	}
}
