import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    margin: '0 auto',
    marginLeft: 10,
    marginRight: 10
    },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  let [globalData, setglobalData] = useState({})

  useEffect( () => {

    async function virusData(){
      const response = await fetch('https://api.thevirustracker.com/free-api?global=stats')
      const data = await response.json()
      setglobalData(data)
      console.log(data.results[0])
      delete data.results[0].source

    }

    virusData()

  //  getRepos()
  },[])


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
        <Paper className={classes.paper} elevation={3}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
