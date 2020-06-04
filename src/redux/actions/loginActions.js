export const setUsername = (value) => (dispatch) => {
	dispatch({
		type: 'set_username',
		payload: value,
	});
};

export const setPassword = (value) => (dispatch) => {
	dispatch({
		type: 'set_password',
		payload: value,
	});
};

export const setRememberMe = (value) => (dispatch) => {
	dispatch({
		type: 'set_rememberMe',
		payload: value,
	});
};

export const setRedirectTo = (value) => (dispatch) => {
	dispatch({
		type: 'set_redirectTo',
		payload: value,
	});
};
