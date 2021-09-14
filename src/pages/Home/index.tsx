import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import { CardWidget } from '../../components/Card';
import { GroceryList } from '../../components/GroceryList';
import { NextSubway } from '../../components/NextSubway';
import { TodaysWeather } from '../../components/TodaysWeather';
import { CustomTheme } from '../../theme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: CustomTheme) => ({
  root: {},
}));

export const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.reload();
    }, 2 * 60 * 60 * 1000);
  }, []);
  document.title = 'Always On Home App';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const classes = useStyles();
  // const params = useParams();
  return (
    <Grid container spacing={1} justifyContent="space-evenly" alignItems="stretch">
      {/* <NextSubway />   */}
      <GroceryList />
      <TodaysWeather />
      <NextSubway subway="A" direction="N" />
      <NextSubway location={162} />
      <NextSubway location={316} line="Broadway - 7Av" />
      <TodaysWeather zip={33704} />
      <CardWidget text={'hello3'} />
      <CardWidget text={'hello4'} />
      <CardWidget text={'hello5'} />
      <CardWidget text={'hello6'} />
      <CardWidget text={'hello7'} />
    </Grid>
  );
};
