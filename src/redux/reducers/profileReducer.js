import React from "react";

const INITIAL_STATE = {
	columns: [
		{ title: 'Country', field: 'name' },
		{ title: 'Capital', field: 'capital' },
		{ title: 'Population', field: 'population' },
		{
			title: 'Flag',
			field: 'flag',
			render: (rowData) => {
				return (
					<div className={"text-center"}>
						<img src={rowData.flag} alt={rowData.flag} width={50} height={30} />
					</div>
				)
			}
		},
    ],
	rows: []
};

export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case 'set_rows':
			return {
				...state,
				rows: action.payload,
			}

		default:
			return state;
	}
}
