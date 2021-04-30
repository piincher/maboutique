import React from 'react';
import './SignIn.scss';
import FormInput from '../form-input/FormInput.component';
import Button from '../custom-button/CustomButton.component';
class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	};
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className="sign-in">
				<h1>i already have and account </h1>
				<span>sign in with your email and password </span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						required
						handleChange={this.handleChange}
						label="email"
					/>

					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
						label="password"
					/>

					<Button type="submit">submit</Button>
				</form>
			</div>
		);
	}
}

export default SignIn;
