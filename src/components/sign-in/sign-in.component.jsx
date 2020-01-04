import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {
	googleSignInStart,
	emailSignInStart
} from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = () => {
	const [userCredentials, setCredentials] = useState({
		email: '',
		password: ''
	});

	const handleSubmit = async e => {
		e.preventDefault();
		emailSignInStart(userCredentials.email, userCredentials.password);
	};

	const handleChange = e => {
		const { name, value } = e.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="sign-in">
			<h2 className="title">I already have an account</h2>
			<span>Sign in with your email and password.</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					value={userCredentials.email}
					handleChange={handleChange}
					required
					label="email"
				/>
				<FormInput
					type="password"
					name="password"
					value={userCredentials.password}
					handleChange={handleChange}
					required
					label="password"
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton onClick={googleSignInStart} isGoogleSignIn>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
