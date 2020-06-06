import React, {Fragment,Component} from 'react';
import { connect } from 'react-redux';
import Api from '../utils/Api';
import * as profileActions from '../redux/actions/profileActions.js';
import { bindActionCreators } from 'redux'
import MaterialTable from 'material-table';

class Profile extends Component {
	componentDidMount() {
		Api.loadMoviesData().then((movieList) => {
			this.props.profileActions.setRows(movieList);
		});
	}

	render() {
		return (
			<Fragment>
				<h3>Bienvenido {this.props.loginState.username}</h3>
				<MaterialTable
					title="Countries"
					columns={this.props.profileState.columns}
					data={this.props.profileState.rows}
				/>
			</Fragment>
		);
	}
}

const mapStateToProps = (reducers) => {
	const {profileReducer, loginReducer} = reducers;

	const combinedStates = {
		loginState: {
			username: loginReducer.username,
		},
		profileState: {
			...profileReducer,
		},
	}
	return combinedStates;
}

function mapDispatchToProps(dispatch) {
	return {
		profileActions: bindActionCreators(profileActions, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
