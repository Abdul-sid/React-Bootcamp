import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    margin: '0 auto'
    },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={3}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={3}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={3}>xs=12 sm=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
