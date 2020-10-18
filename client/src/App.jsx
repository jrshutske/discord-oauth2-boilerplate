import React, { useState, useEffect, createContext } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { get, post } from './services/fetch.service';
import SignInSide from './pages/SignInSide';
import Dashboard from './pages/Dashboard';
import dark from './theme/dark';
import light from './theme/light';
import ThemePicker from './components/ThemePicker';

export const AppContext = createContext();
export default function App() {
  const [user, setUser] = useState(false);
  const [themeSelector, setThemeSelector] = useState(localStorage.getItem('theme') || 'light');
  const [theme, setTheme] = useState(light);
  const [loggingIn, setLoggingIn] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const appStore = {
    authenticated,
    setAuthenticated,
    loggingIn,
    setLoggingIn,
    user,
    setUser,
    themeSelector,
    setThemeSelector,
    redirect,
    setRedirect,
  };

  useEffect(() => {
    localStorage.setItem('theme', themeSelector);
    setTheme(() => {
      switch (themeSelector) {
      case 'light':
        return light;
      case 'dark':
        return dark;
      default: return light;
      }
    });
  }, [themeSelector]);

  useEffect(() => {
    get('/auth/user')
		  	.then((res) => {
        if (res) {
          setRedirect(false);
          setAuthenticated(true);
          setUser(res);
        } else {
          console.info(res);
          setRedirect(true);
        }
      })
      .catch((err) => {
        console.info(err);
        setRedirect(true);
      });
  }, []);

  if (loggingIn) window.location.href = (`${process.env.REACT_APP_API_URL}/api/auth`);
  return (
    <AppContext.Provider value={appStore}>
      <ThemeProvider theme={theme}>
        <Router>
          {!authenticated && redirect && <Redirect to="/signin" />}
          <ThemePicker />
          <Switch>
            <Route path="/signin" component={SignInSide} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
