import React from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../redux/actions/loginActions.js';
import * as temp_tables from '../utils/temp_db.js';
import { Redirect } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Footer() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{ 'Copyright © ' }
			<Link color="inherit" href="https://utj.edu.mx/" target="_blank">
				 Universidad Tecnológica de Jalisco.
			</Link>
			{' '}
			{ new Date().getFullYear() }
			{ '.' }
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const Login = (props) => {
	const classes = useStyles();

	function doLogin(username, password) {
		const authenticated_user = temp_tables.users.find((user) => {
			return (user.username === username && user.password === password);
		});
		if (authenticated_user) {
			props.setRedirectTo('/profile');
		} else {
			alert('Usuario o contraseña incorrectos. Intente de nuevo.')
		}
	}

	if (props.redirectTo.length > 0) {
		return (
			<Redirect to={props.redirectTo} />
		);
	}
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Iniciar sesión
				</Typography>
				<form className={classes.form} onSubmit={(e) => e.preventDefault()} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="username"
						label="Usuario del sistema"
						name="username"
						autoComplete="username"
						autoFocus
						value={props.username}
						onChange={(e) => props.setUsername(e.target.value)}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Contraseña"
						type="password"
						id="password"
						autoComplete="current-password"
						value={props.password}
						onChange={(e) => props.setPassword(e.target.value)}
					/>
					<FormControlLabel
						control={
							<Checkbox
								value="remember"
								color="primary"
								checked={props.rememberMe}
								onChange={(e) => props.setRememberMe(e.target.checked)}
							/>
						}
						label="Recordarme"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={() => doLogin(props.username, props.password)}
					>
						Ingresar
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Olvidaste tu contraseña?
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<Footer />
			</Box>
		</Container>
	);
}

const mapStateToProps = (reducers) => {
	return reducers.loginReducer;
}

export default connect(mapStateToProps, loginActions)(Login);
