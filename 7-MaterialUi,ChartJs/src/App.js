import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, TextField, Button, CircularProgress} from '@material-ui/core';
import BarChart from './barChart';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  root2:{
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    } 
  },
  paper: {
    height: 350,
    width: 300,
    margin: '0 auto',  
    textAlign: "center",
  }
}));

// 50 minutes onwards

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <NavBar />

      <BarChart />
      
    <Paper elevation={3} className={classes.paper}> 
      <h1 style= {{paddingTop: "20px"}} >Login</h1>
      <form className={classes.root2} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Enter E-mail" />
      <TextField id="standard-basic" label="Enter Password" />
      <Button variant="contained" color="primary" style={{marginTop: "40px"}}>
        Submit
      </Button>
      </form>
    </Paper>
   
  </div>
  );
}

export default App;
