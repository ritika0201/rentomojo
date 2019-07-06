import React, { Component } from 'react';
import Login from './components/login/Login';
import SignUp from './components/login/Signup';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Login />
				<SignUp />
			</div>

		);
	}
}

export default App;
