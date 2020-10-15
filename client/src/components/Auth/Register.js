import React, { Fragment, useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { useAuthStyles } from "./styles/useAuthStyles"

export default function Register(props) {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
	const [password, setPassword] = useState("")
	const authClasses = useAuthStyles()
  
    function onRegister() {
        const body = JSON.stringify({email, name, password})
        fetch('/api/register', {
          method: 'POST',
          body: body,
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if (res.status === 200) {
            props.onRegister()
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          alert('Error logging in please try again');
        });
    }

	return (
		<Fragment>
			<Grid item xs={12}>
				<TextField
					className={authClasses.textField}
					id="register-name" 
					label="Name" 
					placeholder="Enter name"
					variant="filled"
					value={name}
					onChange={(e)=>setName(e.target.value)}
					required
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
					className={authClasses.textField}
					id="register-email" 
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
					className={authClasses.textField}
					id="register-password" 
					label="Password" 
					placeholder="Enter password"
					type="password"
					variant="filled"
					value={password}
					onChange={(e)=>setPassword(e.target.value)}
					required
				/>
			</Grid>
			<Grid item xs={12}>
				<Button 
					disabled={!email || !password || !name}
					className={authClasses.submitButton}
					onClick={onRegister}
					variant="contained"
					value="Submit"
				>{"Register"}
				</Button>
			</Grid>
		</Fragment>
	);
}