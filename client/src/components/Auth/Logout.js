import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { AppContext } from '../../App'

export default function Logout(props) {
    const { setAuthenticated } = useContext(AppContext)
    const [loggedOut, setLoggedOut] = useState(false)
    function logout() {
        fetch('/api/unauthenticate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if (res.status === 200) {
            setAuthenticated(false)
            setLoggedOut(true)
            props.onClick()
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          alert('Error logging out.');
        });
    }

    return loggedOut
        ? <Redirect to="/"/>
        : <MenuItem onClick={logout}>
            Logout
          </MenuItem>
}