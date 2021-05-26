import React, { useState, useEffect } from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';

// Material ui components
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// Components
import Copyright from './components/Copyright';
import FormContent from './components/FormContent';

import axios from 'axios';
import './App.css';



const useStyles = makeStyles((theme) => ({
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
  // const [results, setResults] = useState('');
  const [state, setState] = useState({
    age: 20,
    years_of_experience: 0,
    lesson_price: 100,
    qualification: 1,
    physics: 0,
    chemistry: 0,
    biology: 0,
    english: 0,
    geography: 0,
    history: 0,
    mean_exam_points: 30,
  });
  const handleSubmit = () => {
    axios.post('http://localhost:5000/predict', state)
      .then(response => alert(JSON.stringify(response.data)));
  };

  // useEffect(() => {
    
  // }, results);

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <React.Fragment>
            <FormContent state={state} setState={setState} />
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className={classes.button}
              >
                Get prediction
              </Button>
            </div>
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );

}

export default App;
