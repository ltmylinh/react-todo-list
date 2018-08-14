import React, {Component} from 'react';

class TextBox extends Component {
		constructor(props) {
				super(props);

				this.handleChange = this
						.handleChange
						.bind(this);
		}

		handleChange(evt) {
			this.props.onChange(evt.target.value);
		}

		render() {
			const { type, value, placeholder } = this.props;
				return (<input
						type={type}
						value={value}
						onChange={this.handleChange}
						placeholder={placeholder}/>);
		}
}

export default TextBox;