const INITIAL_STATE = {
	username: 'havalos',
	password: 'havalos123',
	rememberMe: false,
	redirectTo: '',
};

export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case 'set_username':
			return {
				...state,
				username: action.payload,
			}

		case 'set_password':
			return {
				...state,
				password: action.payload,
			}

		case 'set_rememberMe':
			return {
				...state,
				rememberMe: action.payload,
			}

		case 'set_redirectTo':
			return {
				...state,
				redirectTo: action.payload,
			}

		default:
			return state;
	}
}
