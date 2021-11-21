import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ setUser }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.get(
				`${process.env.REACT_APP_BACKEND_URL}/user?username=${username}&password=${password}`
			)
			.then((res) => {
				setUser({ username });
			})
			.catch((err) => {
				setError(true);
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Login</h3>
			<input placeholder="Username" type="text" onChange={handleUsernameChange} />
			<input placeholder="Password" type="password" onChange={handlePasswordChange} />
			<input type="submit" value="submit" />
			<p>{error && 'Nieprawidłowe dane'}</p>
		</form>
	);
};

export default LoginForm;
