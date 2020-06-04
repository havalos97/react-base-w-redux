import React, { Component } from "react";
import {
	BrowserRouter,
	Switch,
	Route,
} from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers/index.js';
import reduxThunk from 'redux-thunk';

import Login from './containers/Login.js';
import Profile from './containers/Profile.js';

const store = createStore(
	reducers, /* Reducers */
	applyMiddleware(reduxThunk), /* Initial state */
);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<Route
							path={'/'}
							exact
							render={(props) =>
								<Login {...props} />
							}
						/>
						<Route
							path={'/profile'}
							exact
							render={(props) =>
								<Profile {...props} />
							}
						/>
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
