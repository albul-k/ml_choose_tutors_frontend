import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

// Material ui components
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

// Components
import Copyright from './components/Copyright';
import Features from './components/Features';
import Result from './components/Result';

import axios from 'axios';



const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  content: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));


function App() {
  const classes = useStyles();

  const initState = {
    age: 40,
    years_of_experience: 3,
    lesson_price: 1000,
    qualification: 2,
    physics: 1,
    chemistry: 0,
    biology: 1,
    english: 1,
    geography: 0,
    history: 0,
    mean_exam_points: 60,
  }

  const [result, setResult] = useState([]);
  const [state, setState] = useState(initState);

  useEffect(() => {
    axios.post('http://localhost:5000/predict', state)
      .then((response: any) => {
        setResult(response.data);
      }, (error) => {
        console.log(error);
      });
  }, [state])
  // 
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Features
          </Typography>
          <React.Fragment>
            <Box className={classes.content}>
              <Features state={initState} setState={setState} />
            </Box>
            <Divider />
            <Box className={classes.content}>
              <Result result={result} />
            </Box>
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}

export default App;
