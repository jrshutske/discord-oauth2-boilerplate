import React, { useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DiscordLogo from '../images/discordLogo.svg'
import { Follow, Star, Watch, Fork } from '../components/GithubButtons'
import ContainedButton from '../components/Button'
import Copyright from '../components/Copyright';
import { AppContext } from '../App'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://media.giphy.com/media/cEYFeE4wJ6jdDVBiiIM/giphy.gif)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const { setLoggingIn } = useContext(AppContext)

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src={DiscordLogo} alt="Logo" width="50%" style={{height:"20vh"}} />
          <Typography component="h1" variant="h5">
            {"Sign In"}
          </Typography>
          <Typography component="span" variant="span">
            {"with your discord account"}
          </Typography>
          <ContainedButton
            fullWidth
            onClick={()=>setLoggingIn(true)}
          >
            {"Sign In With Discord"}
          </ContainedButton>
            <Box mt={5}>
              <Follow/> &nbsp;
              <Star/> &nbsp;
              <Watch/> &nbsp;
              <Fork/> &nbsp;
            </Box>
            <Box mt={5}>
              <Copyright />
            </Box>
        </div>
      </Grid>
    </Grid>
  );
}
