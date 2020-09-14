import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GlobalStats from './GlobalStats.js'
import AllCountries from './AllCountries.js'

export default function InfoPanel({currentScreen}) {

  if(currentScreen === 0){
    return   <GlobalStats />
  }
  else if(currentScreen === 1){
    return <AllCountries />
  }
  else{
    return   <GlobalStats />

  }
}
