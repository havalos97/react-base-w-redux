export const setRows = (value) => (dispatch) => {
	dispatch({
		type: 'set_rows',
		payload: value,
	});
};
