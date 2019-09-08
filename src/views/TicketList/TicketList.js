import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TicketToolbar, TicketTable } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TicketList = () => {
  const classes = useStyles();

  const [hasError, setErrors] = useState(false);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://127.0.0.1:5000/api/tickets");
      res
        .json()
        .then(res => setTickets(res))
        .catch(err => setErrors(err));
    }
    
    fetchData();
  },[]);

  if(hasError) console.error(hasError);

  return (
    <div className={classes.root}>
      <TicketToolbar />
      <div className={classes.content}>
        <TicketTable tickets={tickets} />
      </div>
    </div>
  );
};

export default TicketList;