import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  NewTickets,
  TotalTicketsOpen,
  TicketByDevice,
  TicketTrend,
} from './components';
import Cookies from 'js-cookie';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const { history } = props;

  // Simulating a non authencatied user
  const isUserAuthed = Cookies.get('token');
  if(!isUserAuthed) {
    console.log('User not signed in');
    history.push('/sign-in')
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={6}
          sm={6}
          xl={6}
          xs={12}
        >
          <NewTickets />
        </Grid>
        <Grid
          item
          lg={6}
          sm={6}
          xl={6}
          xs={12}
        >
          <TotalTicketsOpen />
        </Grid>
        <Grid
          item
          lg={6}
          sm={6}
          xl={9}
          xs={12}
        >
          <TicketTrend />
        </Grid>
         <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <TicketByDevice />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;