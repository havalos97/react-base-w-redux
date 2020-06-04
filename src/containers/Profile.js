import React, {Component} from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
	render() {
		return (
			<h1>Bienvenido {this.props.username}</h1>
		);
	}
}

const mapStateToProps = (reducers) => {
	return reducers.loginReducer;
}

export default connect(mapStateToProps)(Profile);
