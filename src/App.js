import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

const App = () => {
	const [user, setUser] = useState({ username: '' });

	return <>{user.username ? <p>Hello {user.username}!</p> : <LoginForm setUser={setUser} />}</>;
};

export default App;
