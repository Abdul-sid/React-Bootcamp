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

export default function AllCountries({currentScreen}) {
  const classes = useStyles();

  let [globalData, setglobalData] = useState([{}])

  console.log(currentScreen)
  useEffect( () => {

    async function virusData(){
      const response = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL')
      const data = await response.json()
    
    
      //   delete data.results[0].source
      setglobalData(Object.values(data.countryitems[0]))
      console.log(data.countryitems[0]["1"])

    }

    virusData()

  //  getRepos()
  },[])


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(globalData[0]).map((key,ind) => {
          return(
            <Grid item xs={12} sm={4} key ={ind}>
              <Paper className={classes.paper} 
              elevation={3}>
               <h3 style = {{color: "blue"}} >{key.replace(/_/g, ' ').toUpperCase()}</h3>
               <h3>{globalData[0][key]}</h3>
                </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}
