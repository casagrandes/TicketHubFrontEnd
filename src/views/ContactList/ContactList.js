import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { ContactToolbar, ContactTable } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const ContactList = () => {
  const classes = useStyles();

  const [hasError, setErrors] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://127.0.0.1:5000/api/contacts");
      res
        .json()
        .then(res => setContacts(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  },[]);
  
  if(hasError) console.error(hasError);

  return (
    <div className={classes.root}>
      <ContactToolbar />
      <div className={classes.content}>
        <ContactTable contacts={contacts} />
      </div>
    </div>
  );
};

export default ContactList;