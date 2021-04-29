import React from 'react';
import './SignIn.scss';
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
					<input name="email" type="email" value={this.state.email} required onChange={this.handleChange} />
					<label>Email</label>
					<input
						name="password"
						type="password"
						value={this.state.password}
						onChange={this.handleChange}
						required
					/>
					<label>Password </label>
					<input type="submit" value="submit form" />
				</form>
			</div>
		);
	}
}

export default SignIn;
