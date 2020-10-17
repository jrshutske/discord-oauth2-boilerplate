import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { get } from './services/fetch.service'
export const AppContext = createContext()

export default function App() {
	const [loggingIn, setLoggingIn] = useState(false)
	const [user, setUser] = useState(false)
	const [authenticated, setAuthenticated] = useState(false)
console.debug(get)
	const appStore = { 
		authenticated,
		setAuthenticated,
		user,
		setUser
	}

	useEffect(()=>{
		get('/auth/check')
			.then((res)=>{
				setAuthenticated(res)
			})
			.catch((err)=>{
				setAuthenticated(false)
				console.error(err)
			})
	},[])

	useEffect(()=>{
		if (authenticated) {
			get('/auth/user')
				.then((res)=>setUser(res))
				.catch((err)=>{
					setUser({})
					console.info("Could not fetch the user.")
				})
		}
	},[authenticated])

	const clickDash = async () => {
		await get('/dashboard', {credentials: 'include'})
	}

	if (loggingIn) window.location.href = process.env.REACT_APP_API_URL + '/api/auth';
	return (
		<AppContext.Provider value={appStore}>
			<button onClick={()=>setLoggingIn(true)}>Login</button>
			<button onClick={clickDash}>Dashboard</button>
			{Object.keys(user).length > 0 && JSON.stringify(user)}
			<Router>
			</Router>
		</AppContext.Provider>
	);	
}