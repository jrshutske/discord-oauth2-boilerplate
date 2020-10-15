import React, { Fragment, useState, useContext } from 'react';
import { AppContext } from '../../App'
import { TextField, Grid, Button } from '@material-ui/core';

export default function Login(props) {
	const { setAuthenticated } = useContext(AppContext)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")

    const onLogin = () => {
        fetch('/api/authenticate', {
          	method: 'POST',
          	body: JSON.stringify({ email, password }),
          	headers: {
            	'Content-Type': 'application/json'
          	}
        })
        .then((res) => {
          	if (res.status === 200) {
				props.onLogin()
				setAuthenticated(true)
			} 
			else {
            	const error = new Error(res.error);
            	throw error;
          	}
		})
        .catch(err => {
          	console.error(err);
          	setError("Invalid username or password")
        });
	}

	return ( 
		<Fragment>
			<Grid item xs={12}>
				<TextField 
					style={{width: "100%"}}
					id="login-email" 
					label="Email" 
					placeholder="Enter email"
					variant="filled"
					value={email}
					onChange={(e)=>setEmail(e.target.value)}
					required
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
					style={{width: "100%"}}
					id="login-password" 
					label="Password" 
					placeholder="Enter password"
					type="password"
					variant="filled"
					value={password}
					onChange={(e)=>setPassword(e.target.value)}
					required
				/>
			</Grid>
			{error}
			<Grid item xs={12}>
				<Button
					disabled={!email || !password}
					style={{width: "100%"}}
					onClick={onLogin}
					variant="contained"
					value="Submit"
				>{"Login"}
			</Button>
			</Grid>
		</Fragment>
	);
}