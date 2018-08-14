import React, {Component} from 'react';
import TextBox from './../text-box/text-box';
import './todolist.css';

class Todolist extends Component {
		constructor(props) {
				super(props);
				this.state = {
						list: [],
						value: ''
				};

				this.handleSubmit = this
						.handleSubmit
						.bind(this);

				this.handleChange = this.handleChange.bind(this);
		}

		handleSubmit(event) {
				event.preventDefault();
				this.state.value &&
				this.setState((preStates) => ({
						list: [
								...preStates.list,
								this.state.value
						],     
						value: ''
				}));
		}

		handleRemoveItem(index) {
				this.setState(({list}) => ({
						list: list
								.filter((item, key) => key !== index)
				}));
		}

		handleChange(value) {
			this.setState((preStates) => ({
				...preStates,
				value
			}));
		}

		render() {
			const { value, list } = this.state;
				return (
						<div className="todolist-container">
								<div className="header">
										<h1>Linh's todolist</h1>
										<form onSubmit={this.handleSubmit}>
												<TextBox type="text" placeholder="Task" value={value} onChange={this.handleChange}/>
												<input type="submit" value="Add" className="btnSubmit"/>
										</form>
								</div>
								<div className="list-items">
										<ul>{list
														.map((item, index) => <li key={index}>{item}
																<span
																		onClick={this
																		.handleRemoveItem
																		.bind(this, index)}>&#10006;</span>
														</li>)}
										</ul>
								</div>
						</div>
				)
		}
}

export default Todolist;